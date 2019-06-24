import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users = [
    {
      name: 'John',
    },
    {
      name: 'Johni',
    },
    {
      name: 'Jessi',
    },
    {
      name: 'Billi',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
