import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-view',
  templateUrl: './donate-view.component.html',
  styleUrls: ['./donate-view.component.scss']
})
export class DonateViewComponent implements OnInit {
  title = "DONATE NOW";
  subtitle = "support the cause, fuck the corpos"
  cards = [
    {
      title: "One Time Donation",
      subTitle: "No commitment, just support",
      imagePath: "assets/img/tyr.jpg",
      content: "Want to keep fighting the good fight?\n\n Donate now and become part of the cause",
      actionText: "DONATE"
    },
    {
      title: "Tier 1: Eat The Rich",
      subTitle: "Monthly reoccurring",
      imagePath: "assets/img/pella-ship.png",
      content: "5 Hundos each month keeps the satellite drifting.",
      actionText: "SUBSCRIBE"
    },
    {
      title: "Tier 2: Burn it down",
      subTitle: "Monthly reoccurring",
      imagePath: "assets/img/mining-colony.jpg",
      content: "10 Hundos each month supports regular stories. \n Fight the kojos, become a warrior, subscribe now.",
      actionText: "SUBSCRIBE"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
