import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, SimpleChanges, OnChanges } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {
  @Output('onUserCreated') enteredUserData = new EventEmitter<{firstName: string, familyName: string, countryName: string}>();
  @ViewChild('firstName') firstName: ElementRef
  

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
  
  ngOnChanges(change: SimpleChanges){
    console.log('ngOnChanges');
    console.log(change);
  }

}
