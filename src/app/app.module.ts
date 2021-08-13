import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnterWebsiteComponent } from './views/enter-website/enter-website.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CountdownModule } from 'ngx-countdown';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { StoryViewComponent } from './views/story-view/story-view.component';
import { DonateViewComponent } from './views/donate-view/donate-view.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { BaseViewComponent } from './views/base-view/base-view.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { ContactViewComponent } from './views/contact-view/contact-view.component';
import { DonateCardComponent } from './component/page-elements/donate-card/donate-card.component';
import { StoryComponent } from './component/page-elements/story/story.component';
import { IconTextComponent } from './component/reusable/icon-text/icon-text.component';
import { TitleBannerComponent } from './component/reusable/title-banner/title-banner.component';
import { TeamMemberComponent } from './component/page-elements/team-member/team-member.component';
import { AdPopupComponent } from './component/reusable/ad-popup/ad-popup.component';
import { HackingDialogComponent } from './component/hacking/hacking-dialog/hacking-dialog.component';
import { HexInputComponent } from './component/hacking/hex-input/hex-input.component';
import { GridComponent } from './component/hacking/grid/grid.component';
import { TimeRemainingComponent } from './component/hacking/time-remaining/time-remaining.component';
import { SequenceProgressComponent } from './component/hacking/sequence-progress/sequence-progress.component';
import { BufferComponent } from './component/hacking/buffer/buffer.component';
import { HexDisplayComponent } from './component/hacking/hex-display/hex-display.component';
import { SequenceRowComponent } from './component/hacking/sequence-row/sequence-row.component';
import { TimerPipe } from './pipes/timer.pipe';
import { HackCompleteComponent } from './component/hacking/hack-complete/hack-complete.component';
import { BreachViewComponent } from './views/breach-view/breach-view.component';
import { CorpoDirtComponent } from './component/page-elements/corpo-dirt/corpo-dirt.component';

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
    StoryComponent,
    IconTextComponent,
    TitleBannerComponent,
    TeamMemberComponent,
    AdPopupComponent,
    HackingDialogComponent,
    HexInputComponent,
    GridComponent,
    TimeRemainingComponent,
    SequenceProgressComponent,
    BufferComponent,
    HexDisplayComponent,
    SequenceRowComponent,
    TimerPipe,
    HackCompleteComponent,
    BreachViewComponent,
    CorpoDirtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
