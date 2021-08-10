import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.scss'],
})
export class StoryViewComponent implements OnInit {
  title = 'THE BEST VIDEOS';
  subtitle = 'Like and subcribe';
  stories = [
    {
      headline: "KOJOS STEAL THE AQUA (YOU WON'T BELIEVE WHAT HAPPENS NEXT)",
      imgPath: 'assets/img/story/water-stealer-video.png',
      content: "After makin' it out of Kaytu in once piece (GO WATCH IF YOU HAVEN'T, VIDEO BELOW) me and some new friends started doin' some jobs to make ends meet. \n\n Found so kojos stealing the aqua from the station. Now we know that deserves punishment. But things are never easy! \n\n What happens next will blow your mind!!"
    },
    {
      headline: 'CRAZY ALIEN BLOWS UP TRAIN (GONE WRONG)',
      imgPath: 'assets/img/story/train-explosion-video.png',
      content: "While on the run I landed on Kaytu in the Karimir system. \n\n Stinkin' planet ruined by the corpos (like most of them). Don't worry, corpos won't find me im long gone. \n\n Shit started poppin' off when Horrid started goin' crazy though. Whole planet falls apart under the corpo greed. \n\n Keep watchin' for some insane action! "
    },
    {
      headline: 'WE NEED TO TALK (NEW CHANNEL DIRECTION)',
      imgPath: 'assets/img/story/new-beginning-video.png',
      content:
        "After an unfortunate situation on Tyr (long time subs will know what im talking about) I was forced by the kojo corpos to leave the system.\n\n Had to delete some of my older videos from the net (I'm sure someone still has them) because they migh've been a lil incriminating. \n\n For now the channel is changing direction while im lookin' for a way to hide from the corpos lookin for me. More videos of me on the run are coming. \n\n We be back to fuckin' BFG soon",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
