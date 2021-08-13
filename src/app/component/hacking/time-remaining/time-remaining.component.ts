import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../Game';

@Component({
  selector: 'app-time-remaining',
  templateUrl: './time-remaining.component.html',
  styleUrls: ['./time-remaining.component.scss'],
})
export class TimeRemainingComponent implements OnInit {
  @Input() game!: Game;  

  constructor() {}

  ngOnInit(): void {}

}
