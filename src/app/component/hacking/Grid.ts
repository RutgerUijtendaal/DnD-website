import { rndInt } from 'src/app/util/utilFunctions';
import { environment } from 'src/environments/environment';
import { Sequence } from './Sequence';
import { GridTile } from './Tile';
import { GridConfig, GridState } from './types';

export class Grid {
  generationAttempt: number = 0;
  state: GridState = 'row';
  grid: GridTile[][] = [];
  enabledRow = 0;
  enabledColumn = -1;

  constructor(private config: GridConfig, private sequences: Sequence[]) {
    this.generate();
    if (environment.debug) {
      this.debug();
    }
  }

  tileClicked(tile: GridTile) {
    switch (this.state) {
      case 'row':
        this.enabledRow = -1;
        this.enabledColumn = tile.column;
        this.handleStateChange();
        break;
      case 'column':
        this.enabledRow = tile.row;
        this.enabledColumn = -1;
        this.handleStateChange();
        break;
      default:
        break;
    }
  }

  disable() {
    this.setState('disabled');
  }

  debug() {
    console.log('Grid Generation Debug');
    this.grid.forEach((row) => {
      let text = '|';
      row.forEach((tile) => {
        text = text + ` (${tile.row}, ${tile.column}) - ${tile.hexValue} |`;
      });
      console.log(text);
    });
  }

  resetHighlight() {
    this.grid.forEach((row) => {
      row.forEach((tile) => {
        tile.highlight = false;
      });
    });
  }

  highlight(tile: GridTile) {
    if(this.state === 'row') {
      this.highlightColumn(tile.column)
    } else {
      this.highlightRow(tile.row)
    }
  }

  private highlightRow(rowNr: number) {
    this.grid.forEach((row) => {
      row.forEach((tile) => {
        if (tile.row === rowNr) {
          tile.highlight = true;
        }
      });
    });
  }

  private highlightColumn(columnNr: number) {
    this.grid.forEach((row) => {
      row.forEach((tile) => {
        if (tile.column === columnNr) {
          tile.highlight = true;
        }
      });
    });
  }

  private setState(state: GridState) {
    this.state = state;
    this.handleStateChange();
  }

  private handleStateChange() {
    switch (this.state) {
      case 'row':
        this.state = 'column';
        break;
      case 'column':
        this.state = 'row';
        break;
      case 'disabled':
        this.enabledRow = -1;
        this.enabledColumn = -1;
        break;
      default:
        break;
    }
  }

  private generate() {
    this.populateGrid();
    this.guaranteeSuccessPaths(this.sequences[this.sequences.length - 1]);
  }

  private populateGrid() {
    for (let row = 0; row < this.config.gridSize; row++) {
      let _row = [];
      for (let column = 0; column < this.config.gridSize; column++) {
        _row[column] = GridTile.newGrid(row, column);
      }
      this.grid[row] = _row;
    }
  }

  private guaranteeSuccessPaths(sequence: Sequence) {
    let failure = false;
    let previousRow = 0;
    let previousColumn = 0;

    sequence.forEach((sequenceTile, index) => {
      let position = rndInt(0, this.config.gridSize - 1);
      let gridTile = GridTile.from(sequenceTile);
      gridTile.inMainPath = true;

      if (index % 2 === 0) {
        gridTile.row = previousRow;
        gridTile.column = position;

        previousColumn = position;
      } else {
        gridTile.row = position;
        gridTile.column = previousColumn;
        previousRow = position;
      }

      if (!this.isHexInPath(gridTile)) {
        this.addHexTileToGrid(gridTile);
      } else {
        failure = true;
        console.error(`Couldn\'t guarentee success path for ${sequence.sequenceNumber}, retrying...`);
      }
    });

    if (failure) {
      if (this.generationAttempt < (this.config.maxAttempts ? this.config.maxAttempts : 20)) this.generate();
    }
  }

  private addHexTileToGrid(tile: GridTile) {
    this.grid[tile.row][tile.column] = tile;
  }

  private isHexInPath(tile: GridTile) {
    return this.grid[tile.row][tile.column].inMainPath;
  }
}
