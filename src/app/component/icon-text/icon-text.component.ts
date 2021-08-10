import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.scss']
})
export class IconTextComponent implements OnInit {
  @Input() icon: string = "";
  @Input() text: number = 0;
  clicked = false;

  constructor() { }

  ngOnInit(): void {
    if(this.text === 0 ) {
      this.text = Math.floor(Math.random()*10)+1;
    }
  }

  clickButton () {
    if(this.clicked)
      this.text = this.text - 1;
    else
      this.text = this.text + 1;

    this.clicked = !this.clicked;
  }

}
