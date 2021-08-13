import { environment } from 'src/environments/environment';
import { Buffer } from './Buffer';
import { Game } from './Game';
import { DisplayTile, SequenceTile, Tile } from './Tile';
import { SequenceConfig, SequenceState } from './types';

export class Sequence extends Array<SequenceTile> {
  state: SequenceState = 'start';
  counter = 0;
  spacing = 0;

  constructor(private config: SequenceConfig, public sequenceNumber: number = 0, private game: Game) {
    super();
    this.generate(this.config);
    if (environment.debug) this.debug();
  }

  active() {
    return this.state === 'start' || this.state === 'progress';
  }

  success() {
    return this.state === 'success';
  }

  failure() {
    return this.state === 'failure';
  }

  debug() {
    console.log(`Sequence - Sequence Number: ${this.sequenceNumber}`);
    let text = '';
    this.forEach((tile) => {
      text = text + `${tile.hexValue} `;
    });
    console.log(text);
  }

  validate(tile: Tile) {
    if (environment.debug) {
      console.log(
        `Sequence Validation: ${this.sequenceNumber} | bufferLeft: ${this.game.buffer.spaceLeft()} | state: ${
          this.state
        } | expected: ${this[this.counter].hexValue} | actual: ${tile.hexValue}`,
      );
    }

    switch (this.state) {
      case 'start':
        if (this[0].equals(tile)) {
          this.setState('progress');
          this.setCurrentTileCorrect();
        } else if (!this.canSucceed()) {
          this.setState('failure');
        }
        break;
      case 'progress':
        if (!this[this.counter].equals(tile)) {
          this.setState('failure');
        } else {
          this.setCurrentTileCorrect();
        }
        break;
      default:
        break;
    }
  }

  next() {
    if (this.state === 'failure' || this.state === 'success') {
      return;
    }

    if (this.state === 'start') {
      this.spacing++;
      return;
    }

    if (this.counter < this.length - 1) {
      this[this.counter].active = false;
      this.counter++;
      this[this.counter].active = true;
    } else {
      this.setState('success');
    }
  }

  resetHighlight() {
    this.forEach((tile) => {
      tile.highlight = false;
    });
  }

  setHighlight(tile: DisplayTile) {
    if (this.state === 'start' || this.state === 'progress') {
      if (this[this.counter].equals(tile)) {
        this[this.counter].highlight = true;
      }
    }
  }

  cleanup() {
    if (this.state !== 'success') {
      this.setState('failure')
    }
  }

  private setCurrentTileCorrect() {
    this[this.counter].correct = true;
  }

  private canSucceed() {
    return this.game.buffer.spaceLeft() >= this.length;
  }

  private setState(state: SequenceState) {
    if (environment.debug) console.log(`Sequence ${this.sequenceNumber} state change: ${state}`);
    this.state = state;
  }

  private generate(config: SequenceConfig) {
    for (let index = 0; index < config.sequenceLength + this.sequenceNumber; index++) {
      this.push(SequenceTile.newSequence(index));
    }
    this[this.counter].active = true;
    return this;
  }
}
