import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../Game';
import { DisplayTile, GridTile, SequenceTile } from '../Tile';
import { GameState } from '../types';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() game!: Game;
  @Output() endStateEvent = new EventEmitter<GameState>();
  @Output() tileClickedEvent = new EventEmitter<GridTile>();

  constructor() {}

  ngOnInit(): void {
  }

  tileClicked(tile: GridTile) {
    this.game.tileClicked(tile);   
  }

  tileEntered(tile: GridTile) {
    this.game.setHoveredTile(tile);
  }

  tileLeft() {
    this.game.resetHoveredTile()
  }
}
