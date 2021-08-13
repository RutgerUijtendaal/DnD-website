import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridTile } from '../Tile';

@Component({
  selector: 'app-hex-input',
  templateUrl: './hex-input.component.html',
  styleUrls: ['./hex-input.component.scss'],
})
export class HexInputComponent implements OnInit {
  @Input() tile!: GridTile;
  @Input() enabled: boolean = false;
  @Output() tileClickedEvent = new EventEmitter();
  @Output() tileEnteredEvent = new EventEmitter();
  @Output() tileLeftEvent = new EventEmitter();

  isClicked = false;

  constructor() {}

  ngOnInit(): void {}

  click(event: Event) {
    event.stopPropagation();
    this.isClicked = true;
    this.tileClickedEvent.emit(this.tile);
    this.tile.hexValue = '[  ]'
  }

  tileEntered(event: Event) {
    event.stopPropagation();
    if (this.enabled) this.tileEnteredEvent.emit(this.tile);
  }

  tileLeft(event: Event) {
    event.stopPropagation();
    if (this.enabled) this.tileLeftEvent.emit(this.tile);
  }
}
