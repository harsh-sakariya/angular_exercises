import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementDetail: {colour: string, text: string}[] = [
    {colour: 'red', text: 'this para has red colour background'},
    {colour: 'green', text: 'this para has green colour background'},
    {colour: 'yellow', text: 'this para has yellow colour background'},
  ]
}
