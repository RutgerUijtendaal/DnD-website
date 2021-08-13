import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Buffer } from './Buffer';
import {
  BASE_SEQUENCE_LENGTH,
  BUFFER_SIZE,
  GRID_SIZE,
  MAX_PATH_ATTEMPTS,
  MAX_TIME_SECONDS,
  SEQUENCE_COUNT,
} from './constants';
import { Grid } from './Grid';
import { Sequence } from './Sequence';
import { DisplayTile, GridTile } from './Tile';
import { Timer } from './Timer';
import { BufferConfig, GameConfig, GameState, GridConfig, SequenceConfig, TimerConfig } from './types';

export class Game {
  gameConfig!: GameConfig;
  state: GameState = 'start';
  sequences: Sequence[] = [];
  buffer!: Buffer;
  grid!: Grid;
  timer!: Timer;
  timerSubscription!: Subscription;
  highestHackInstalled = -1;
  hoveredTile: DisplayTile = DisplayTile.empty();

  constructor(customConfig: Partial<GameConfig> = {}) {
    this.initializeConfig(customConfig);
    this.initializeTimer();
    this.generateBuffer();
    this.generateSequences();
    this.generateGrid();
    this.start();
  }

  start() {
    if(this.state === 'start') this.setState('progress');
  }

  tileClicked(tile: GridTile) {
    this.grid.tileClicked(tile);
    this.buffer.add(DisplayTile.from(tile));
    this.validateSequenceInput(tile);
    this.resetHoveredTile();

    if (this.buffer.length >= BUFFER_SIZE || this.isAllSequenceEnded()) {
      this.setState('finished');
    }
  }

  setHoveredTile(tile: GridTile) {
    this.hoveredTile = DisplayTile.from(tile);
    this.hoveredTile.highlight = true;
    this.setSequenceHighlights();
    this.grid.highlight(tile);
  }

  resetHoveredTile() {
    this.hoveredTile = DisplayTile.empty();
    this.resetSequenceHighlights();
    this.grid.resetHighlight();
  }

  private resetSequenceHighlights() {
    this.sequences.forEach(sequence => {
      sequence.resetHighlight()
    })
  }

  private setSequenceHighlights() {
    this.sequences.forEach(sequence => {
      sequence.setHighlight(this.hoveredTile)
    })
  }

  private validateSequenceInput(tile: GridTile) {
    this.sequences.forEach((sequence) => {
      sequence.validate(tile);
      sequence.next();
    });
  }

  private setState(state: GameState) {
    if (environment.debug) console.log(`Game state change: ${state}`);
    this.state = state;
    this.handleStateChange();
  }

  private handleStateChange() {
    if (environment.debug) console.log(`state change: ${this.state}`);
    switch (this.state) {
      case 'progress':
        this.timer.start()
        break;
      case 'finished':
      case 'timeout':
        this.grid.disable();
        if (this.hasSuccessSequence()) this.setState('success');
        else this.setState('failure');
        break;
      case 'failure':
        this.handleEndState();
        break;
      case 'success':
        this.handleEndState();
        break;
      default:
        break;
    }
  }

  private handleEndState() {
    this.timer.pause();
    this.cleanupSequences();

    setTimeout(() => {
      this.startEndScreenTransition()
    }, 1000)
  }

  private startEndScreenTransition() {
    let highest = 0;
    this.sequences.forEach((sequence, index) => {
      if(sequence.success()) highest = index + 1;
    })
    this.highestHackInstalled = highest;
  }


  private cleanupSequences() {
    for (const sequence of this.sequences) {
      sequence.cleanup();
    }
  }

  private isAllSequenceEnded() {
    for (const sequence of this.sequences) {
      if (sequence.active()) return false;
    }
    return true;
  }

  private hasSuccessSequence(): boolean {
    for (const sequence of this.sequences) {
      if (sequence.success()) return true;
    }
    return false;
  }

  private initializeConfig(customConfig: Partial<GameConfig>) {
    this.gameConfig = {
      gridSize: GRID_SIZE,
      maxAttempts: MAX_PATH_ATTEMPTS,
      sequenceLength: BASE_SEQUENCE_LENGTH,
      bufferSize: BUFFER_SIZE,
      maxTimeSeconds: MAX_TIME_SECONDS,
      ...customConfig,
    };
  }

  private initializeTimer() {
    this.timer = new Timer(this.gameConfig as TimerConfig);
    this.timerSubscription = this.timer.timer.subscribe((update) => {
      if (update.state === 'finished') this.setState('timeout');
    });
  }

  private generateBuffer() {
    this.buffer = new Buffer(this.gameConfig as BufferConfig);
  }

  private generateSequences() {
    for (let index = 0; index < SEQUENCE_COUNT; index++) {
      this.sequences.push(new Sequence(this.gameConfig as SequenceConfig, index, this));
    }
  }

  private generateGrid() {
    this.grid = new Grid(this.gameConfig as GridConfig, this.sequences);
  }
}
