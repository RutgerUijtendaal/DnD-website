import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../Game';
import { DisplayTile, SequenceTile } from '../Tile';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.scss']
})
export class BufferComponent implements OnInit {
  @Input() game!: Game;
  emptyTile = DisplayTile.empty();

  constructor() { }

  ngOnInit(): void {
  }

  remainingArray() {
    return new Array(this.game.buffer.spaceLeft() - 1 < 0 ? 0 : this.game.buffer.spaceLeft() - 1 )
  }

}
