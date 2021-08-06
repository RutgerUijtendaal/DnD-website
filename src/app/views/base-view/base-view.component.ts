import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { moveFromLeftFade, moveFromRightFade } from 'ngx-router-animations';

@Component({
  selector: 'app-base-view',
  templateUrl: './base-view.component.html',
  styleUrls: ['./base-view.component.scss'],
  animations: [
    trigger('routeAnimations',  [ 
      transition('* => AboutView', 
        useAnimation(moveFromLeftFade)
      ),
      transition('AboutView => *', 
        useAnimation(moveFromRightFade)
      ),
      transition('* => ContactView', 
        useAnimation(moveFromRightFade)
      ),
      transition('ContactView => *', 
        useAnimation(moveFromLeftFade)
      ),
      transition('StoryView => AboutView', 
        useAnimation(moveFromLeftFade)
      ),
      transition('DonateView => ContactView', 
        useAnimation(moveFromRightFade)
      ),
      transition('StoryView => DonateView', 
        useAnimation(moveFromRightFade)
      ),
      transition('DonateView => StoryView', 
        useAnimation(moveFromLeftFade)
      ),
    ])
  ]
})
export class BaseViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
