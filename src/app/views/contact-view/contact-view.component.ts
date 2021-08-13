import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HackingDialogComponent } from 'src/app/component/hacking/hacking-dialog/hacking-dialog.component';

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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  send() {
    if (this.value.length > 0) this.buttonText = 'THANKS!';
    setTimeout(() => {
      this.buttonText = 'Submit_';
    }, 1000);

    this.value = '';
  }

  openHack() {
    const dialogRef = this.dialog.open(HackingDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      
    });
  }
}
