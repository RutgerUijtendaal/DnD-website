import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterState } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-breach-view',
  templateUrl: './breach-view.component.html',
  styleUrls: ['./breach-view.component.scss'],
})
export class BreachViewComponent implements OnInit, OnDestroy {
  state$!: Observable<any>;
  stateSub!: Subscription;
  highestHack: number = 0;
  title: string = "CORPO DIRT";
  subtitle: string = "ONLY THE FINEST"
  hacks = [
    {
      name: 'BFG Security',
      type: 'Data Leak',
      content: 'E-mails, names, locations',
      size: '420 Mb',
      fileType: '.rar'
    },
    {
      name: 'Tarion Station Sex Ring',
      type: 'Data Collection',
      content: 'Names, locations, footage',
      size: '4.3 Gb',
      fileType: '.rar'
    },
    {
      name: 'Tyr Uprising',
      type: 'Documentary',
      content: 'Detailed narration of the failed Tyr Uprising',
      size: '12.3 Gb',
      fileType: '.mp4'
    },
  ]

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));

    this.stateSub = this.state$.subscribe((state) => {
      if(state.highestHackInstalled) {
        this.highestHack = state.highestHackInstalled;
      }
    });
  }

  ngOnDestroy() {
    this.stateSub.unsubscribe();
  }
}
