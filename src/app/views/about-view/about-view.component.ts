import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss']
})
export class AboutViewComponent implements OnInit {
  title = 'THE TEAM';
  subtitle = '';

  constructor() { }

  ngOnInit(): void {
  }

}
