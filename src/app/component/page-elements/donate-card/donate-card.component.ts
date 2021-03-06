import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-card',
  templateUrl: './donate-card.component.html',
  styleUrls: ['./donate-card.component.scss']
})
export class DonateCardComponent implements OnInit {
  @Input() title = 'Title';
  @Input() subTitle = 'Subtitle';
  @Input() imagePath = 'assets/img/tyr.jpg'
  @Input() content = 'assets/img/tyr.jpg'
  @Input() actionText = 'DONATE'

  constructor() { }

  ngOnInit(): void {
  }

  donate() {
    let actionTemp = this.actionText
    this.actionText = "DISABLED";
    setTimeout(() => {
      this.actionText = actionTemp
    }, 2000)
  }

}
