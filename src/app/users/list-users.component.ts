import { Component, OnInit } from '@angular/core';
import { Users } from '../models/user'
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  userlist: Users[];
  ngOnInit() {

  }
  constructor() {
    this.userlist = [
      { Id: '1001', name: 'Anil Singh', site: 'https://www.code-sample.com' },
      { Id: '1002', name: 'Alok', site: 'https://www.code-view.com' },
      { Id: '1003', name: 'Reena', site: 'https://www.code-sample.xyz' },
      { Id: '1004', name: 'Dilip', site: 'https://www.codefari.com' },
    ];
  }

  values = '';
  onKeyUp(event: any) {
    this.values = event.target.value;
    console.log(this.values);
  };

  onKeyDown(event: any) {
    this.values = event.target.value;
    console.log(this.values);
  };
}
