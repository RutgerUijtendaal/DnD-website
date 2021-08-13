import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { moveFromLeftFade, moveFromRightFade } from 'ngx-router-animations';
import { rndInt } from 'src/app/util/utilFunctions';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* => AboutView', useAnimation(moveFromLeftFade)),
      transition('AboutView => *', useAnimation(moveFromRightFade)),
      transition('* => ContactView', useAnimation(moveFromRightFade)),
      transition('ContactView => *', useAnimation(moveFromLeftFade)),
      transition('StoryView => AboutView', useAnimation(moveFromLeftFade)),
      transition('DonateView => ContactView', useAnimation(moveFromRightFade)),
      transition('StoryView => DonateView', useAnimation(moveFromRightFade)),
      transition('DonateView => StoryView', useAnimation(moveFromLeftFade)),
    ]),
    trigger('panelInOut', [
      transition('void => *', [style({ transform: 'translateX(-100%)' }), animate(800)]),
      transition('* => void', [animate(400, style({ transform: 'translateX(100%)' }))]),
    ]),
  ],
})
export class BaseViewComponent implements OnInit {
  showAd = false;
  adChance = 5;

  constructor(private router: Router) {
    this.registerAdTrigger();
  }

  ngOnInit(): void {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  registerAdTrigger() {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (rndInt(0, this.adChance) === 0 && !this.showAd) {
          this.showAd = true;
        }
      }
    });
  }

  close() {
    this.showAd = false;
  }
}
