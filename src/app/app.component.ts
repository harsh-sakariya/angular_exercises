import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usersData = [{firstName: "test", familyName: "test", countryName: "test"}];
  
  storeUserData(data: {firstName: string, familyName: string, countryName: string}){
    this.usersData.push(data);
  }

  destroyData(){
    this.usersData.splice(0,1);
  }
  
}
