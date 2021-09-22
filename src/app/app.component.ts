import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr = [];
  enteredValue = "";
  disableButton = true;

  onInput(event: Event){
    this.enteredValue = (<HTMLInputElement>event.target).value;
    if(this.enteredValue.trim()){
      this.disableButton = false;
    }
    else{
      this.disableButton = true;
    }
  }

  updateArray(){
    this.arr.push(this.enteredValue);
    console.log(this.arr);
  }
}
