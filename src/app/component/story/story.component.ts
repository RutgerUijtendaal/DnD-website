import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  @Input() odd = false;
  @Input() headline = '';
  @Input() imgPath = '';
  @Input() content = '';

  constructor() { }

  ngOnInit(): void {
  }

}
