import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usersData = [];
  
  storeUserData(data: {firstName: string, familyName: string, countryName: string}){
    this.usersData.push(data);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
