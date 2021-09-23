import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output('onUserCreated') enteredUserData = new EventEmitter<{firstName: string, familyName: string, countryName: string}>();
  @ViewChild('firstName') firstName


  onSubmit(familyName, countryName){
    this.enteredUserData.emit({
      firstName: this.firstName.nativeElement.value,
      familyName: familyName.value,
      countryName: countryName.value
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
