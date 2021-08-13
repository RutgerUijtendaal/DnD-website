import { Component, Input, OnInit } from '@angular/core';
import { DisplayTile } from '../Tile';

@Component({
  selector: 'app-hex-display',
  templateUrl: './hex-display.component.html',
  styleUrls: ['./hex-display.component.scss']
})
export class HexDisplayComponent implements OnInit {
  @Input() tile!: DisplayTile;

  constructor() { }

  ngOnInit(): void {
  }

}
