import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corpo-dirt',
  templateUrl: './corpo-dirt.component.html',
  styleUrls: ['./corpo-dirt.component.scss']
})
export class CorpoDirtComponent implements OnInit {
  @Input() name = '';
  @Input() type = '';
  @Input() content = '';
  @Input() size = '';
  @Input() fileType = '.rar'
  hash = '';
  imagePath = 'assets/img/zip-file.png'
  buttonText = "DOWNLOAD"

  constructor() { }

  ngOnInit(): void {
    this.generateHash();
  }

  generateHash() {
    this.hash = Math.random().toString(36).substr(2, 12);
  }

  download() {
    this.buttonText = "NO SERVER";
    setTimeout(() => {
      this.buttonText = "DOWNLOAD"
    }, 2000)
  }

}
