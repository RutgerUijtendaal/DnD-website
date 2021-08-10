import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss']
})
export class AboutViewComponent implements OnInit {
  title = 'THE TEAM';
  subtitle = 'Rag-tag and ready to fuck shit up';
  members = [
    {
      name: 'Briian',
      function: 'Captain',
      imagePath: 'assets/img/team/briian_anon.png',
      content: 'The Bosman \n\n Quiet, contemplating and with a voice that\'ll make you want to follow. \n\nHis insults leave you feeling refreshed.'
    },
    {
      name: 'Sy',
      function: 'Lead Engineer',
      imagePath: 'assets/img/team/sy.png',
      content: 'Lead Engineer on the ship. Social media expert. \n\nMakes hard hitting videos, has hard hitting punches.'
    },
    {
      name: 'Jaran',
      function: 'Pilot',
      imagePath: 'assets/img/team/jaran.png',
      content: 'Not the hottest laser in the arsenal, great pilot.\n\n Talks to clouds.'
    },
    {
      name: 'JD',
      function: 'Treasurer, Gun Operator',
      imagePath: 'assets/img/team/jd_anon.png',
      content: 'Sneaky, stealthy... and he\'s already got your wallet. \n\nGood with coins, better with a knife and gun.'
    },
    {
      name: 'Dr Steele',
      function: 'Science Officer',
      imagePath: 'assets/img/team/caliel_anon.png',
      content: 'Ex-corpo, alcoholic, genius? \n\nAlways has a bottle nearby, always knows how to fix your computer.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
