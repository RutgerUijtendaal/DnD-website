import { environment } from 'src/environments/environment';
import { DisplayTile } from './Tile';
import { BufferConfig } from './types';

export class Buffer extends Array<DisplayTile> {
  constructor(private config: BufferConfig) {
    super();
    if(environment.debug) console.log(`Buffersize: ${this.config.bufferSize}`)
  }

  add(tile: DisplayTile) {
    tile.correct = true;
    this.push(tile)
  }

  spaceLeft() {
    return this.config.bufferSize - this.length;
  }
}
