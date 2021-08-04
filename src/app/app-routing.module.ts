import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { BaseViewComponent } from './views/base-view/base-view.component';
import { ContactViewComponent } from './views/contact-view/contact-view.component';
import { DonateViewComponent } from './views/donate-view/donate-view.component';
import { EnterWebsiteComponent } from './views/enter-website/enter-website.component';
import { StoryViewComponent } from './views/story-view/story-view.component';

const routes: Routes = [
  {
    path: '',
    component: EnterWebsiteComponent,
    data: { animation: 'EnterView' }
  },
  {
    path: '',
    component: BaseViewComponent,
    data: { animation: 'BaseView' },
    children: [
      {
        path: 'about',
        component: AboutViewComponent,
        data: { animation: 'AboutView' }
      },
      {
        path: 'story',
        component: StoryViewComponent,
        data: { animation: 'StoryView' }
      },
      {
        path: 'donate',
        component: DonateViewComponent,
        data: { animation: 'DonateView' }
      },
      {
        path: 'contact',
        component: ContactViewComponent,
        data: { animation: 'ContactView' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
