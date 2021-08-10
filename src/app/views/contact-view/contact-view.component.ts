import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss'],
})
export class ContactViewComponent implements OnInit {
  title = 'CONTACT ME';
  subtitle = 'Any tips, info, dirt on corpos';
  value = '<Message>';
  buttonText = 'Submit_';

  constructor() {}

  ngOnInit(): void {}

  send() {
    if (this.value.length > 0) this.buttonText = 'THANKS!';
    setTimeout(() => {
      this.buttonText = 'Submit_';
    }, 1000);

    this.value = '';
  }
}
