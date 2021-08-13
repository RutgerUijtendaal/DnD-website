import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fromBottomEasing } from 'ngx-router-animations';
import { Sequence } from '../Sequence';
import { SequenceTile } from '../Tile';

@Component({
  selector: 'app-sequence-row',
  templateUrl: './sequence-row.component.html',
  styleUrls: ['./sequence-row.component.scss'],
  animations: [
    trigger('panelInOut', [
      transition('void => *', [style({ transform: 'translateX(2%)' }), animate(200)]),
    ]),
  ],
})
export class SequenceRowComponent implements OnInit {
  @Input() sequence!: Sequence;
  emptyTile = SequenceTile.empty();

  constructor() {}

  ngOnInit(): void {}

  spacingArray(length: number) {
    return new Array(length);
  }
}
