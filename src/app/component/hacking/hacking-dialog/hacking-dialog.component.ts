import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Game } from '../Game';
import { GridTile } from '../Tile';
import { TimeRemainingComponent } from '../time-remaining/time-remaining.component';

@Component({
  selector: 'app-hacking-dialog',
  templateUrl: './hacking-dialog.component.html',
  styleUrls: ['./hacking-dialog.component.scss'],
})
export class HackingDialogComponent implements OnInit {
  @ViewChild('timer', { static: false }) timer!: TimeRemainingComponent;
  game: Game;

  constructor() {
    this.game = new Game();
  }

  ngOnInit(): void {}

  tileClicked(tile: GridTile) {
    this.game.tileClicked(tile);
  }
}
