import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login: "bob", role: "admin", lastlogin: new Date('10/3/2021')},
    {login: "lia", role: "user", lastlogin: new Date('3/10/2021')},
    {login: "john", role: "admin", lastlogin: new Date('1/31/2021')},
    {login: "robin", role: "admin", lastlogin: new Date('2/26/2021')},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
