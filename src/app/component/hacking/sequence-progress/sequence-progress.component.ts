import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../Game';

@Component({
  selector: 'app-sequence-progress',
  templateUrl: './sequence-progress.component.html',
  styleUrls: ['./sequence-progress.component.scss']
})
export class SequenceProgressComponent implements OnInit {
  @Input() game!: Game;

  constructor() {}

  ngOnInit(): void {}
}
