import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-view',
  templateUrl: './donate-view.component.html',
  styleUrls: ['./donate-view.component.scss']
})
export class DonateViewComponent implements OnInit {
  cards = [
    {
      title: "One Time Donation",
      subTitle: "No commitment, just support",
      imagePath: "assets/img/tyr.jpg",
      content: "You like what I do? Want to keep fighting the good fight? Donate now and become part of the cause"
    },
    {
      title: "Tier 1: Eat The Rich",
      subTitle: "Monthly reoccurring",
      imagePath: "assets/img/pella-ship.png",
      content: "5 Hundos each month keeps the satellite drifting."
    },
    {
      title: "Tier 2: Burn it down",
      subTitle: "Monthly reoccurring",
      imagePath: "assets/img/mining-colony.jpg",
      content: "10 Hundos each month supports regular stories. Fight the establishment, become a warrior, donate now."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}