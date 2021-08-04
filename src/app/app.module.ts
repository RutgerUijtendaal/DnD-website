import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnterWebsiteComponent } from './views/enter-website/enter-website.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { StoryViewComponent } from './views/story-view/story-view.component';
import { DonateViewComponent } from './views/donate-view/donate-view.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { BaseViewComponent } from './views/base-view/base-view.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { ContactViewComponent } from './views/contact-view/contact-view.component';
import { DonateCardComponent } from './component/donate-card/donate-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterWebsiteComponent,
    AboutViewComponent,
    StoryViewComponent,
    DonateViewComponent,
    NavBarComponent,
    BaseViewComponent,
    ContactViewComponent,
    DonateCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule ,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
