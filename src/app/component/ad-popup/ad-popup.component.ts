import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ad-popup',
  templateUrl: './ad-popup.component.html',
  styleUrls: ['./ad-popup.component.scss']
})
export class AdPopupComponent implements OnInit {
  @Output() closeAdEvent = new EventEmitter();

  ads = [
    {
      imagePath: "assets/img/popup/union-1.jpg",
      header: "UNIONIZE",
      content: "Take back the power"
    },
    {
      imagePath: "assets/img/popup/toga.jpg",
      header: "SHOOT TO DESTROY",
      content: "New T.O.G.A Breaching policy"
    }, 
    {
      imagePath: "assets/img/popup/finley.png",
      header: "EXPLORE THE UNIVERSE",
      content: "Browse memes"
    }
  ]
  selected = this.ads[Math.floor(Math.random()*this.ads.length)]

  constructor() {}

  ngOnInit() {}

  close() {
    this.closeAdEvent.emit('closed');
  }

}
