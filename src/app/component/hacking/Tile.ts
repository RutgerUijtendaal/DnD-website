import { rndInt } from 'src/app/util/utilFunctions';
import { HEX_VALUES } from './constants';

export class Tile {
  constructor(public hexValue: string) {}

  equals(tile: Tile) {
    return tile.hexValue === this.hexValue;
  }

  static empty() {
    return new Tile('');
  }

  protected static getRandomHex() {
    return HEX_VALUES[rndInt(0, HEX_VALUES.length - 1)];
  }
}

export class DisplayTile extends Tile {
  empty = false;
  correct = false;
  highlight = false;
  active = false;

  constructor(public hexValue: string) {
    super(hexValue);
  }

  static newDisplay(hexValue: string = super.getRandomHex()) {
    return new DisplayTile(hexValue);
  }

  static from(gridTile: GridTile) {
    return new DisplayTile(gridTile.hexValue);
  }

  static empty() {
    let tile = new DisplayTile('');
    tile.empty = true;
    return tile;
  }
}

export class SequenceTile extends DisplayTile {
  constructor(public numberInSequence: number, public hexValue: string) {
    super(hexValue);
  }

  static from(gridTile: GridTile) {
    return new SequenceTile(0, gridTile.hexValue);
  }

  static newSequence(numberInSequence: number, hexValue: string = super.getRandomHex()) {
    return new SequenceTile(numberInSequence, hexValue);
  }

  static empty() {
    return new SequenceTile(0, '');
  }
}

export class GridTile extends Tile {
  highlight = false;

  constructor(public row: number, public column: number, public inMainPath: boolean, public hexValue: string) {
    super(hexValue);
  }

  static newGrid(
    row: number = 0,
    column: number = 0,
    inMainPath: boolean = false,
    hexValue: string = super.getRandomHex(),
  ) {
    return new GridTile(row, column, inMainPath, hexValue);
  }

  static from(sequenceTile: SequenceTile) {
    return new GridTile(0, 0, false, sequenceTile.hexValue);
  }

  static empty() {
    return new GridTile(0, 0, false, '-');
  }
}
