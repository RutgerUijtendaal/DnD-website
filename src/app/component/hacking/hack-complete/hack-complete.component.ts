import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Game } from '../Game';
import { HackingDialogComponent } from '../hacking-dialog/hacking-dialog.component';

@Component({
  selector: 'app-hack-complete',
  templateUrl: './hack-complete.component.html',
  styleUrls: ['./hack-complete.component.scss'],
})
export class HackCompleteComponent implements OnInit {
  @Input() game!: Game;
  NAVIGATE_DELAY_SECONDS = 4;
  failed: boolean = true;

  constructor(private router: Router, private dialogRef: MatDialogRef<HackingDialogComponent>) {}

  ngOnInit(): void {
    if (this.isHacked()) this.failed = false;
    this.delayNavigate()
  }

  isHacked() {
    return this.game.highestHackInstalled !== 0;
  }

  delayNavigate() {
    setTimeout(() => {
      this.dialogRef.close();
      this.router.navigateByUrl('breach', { state: {highestHackInstalled: this.game.highestHackInstalled }})
    }, this.NAVIGATE_DELAY_SECONDS * 1000)
  }
}
