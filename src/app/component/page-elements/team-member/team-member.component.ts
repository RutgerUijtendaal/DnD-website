import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
})
export class TeamMemberComponent implements OnInit {
  @Input() name = '';
  @Input() function = '';
  @Input() imagePath = '';
  @Input() content = '';

  constructor() {}

  ngOnInit(): void {}
}
