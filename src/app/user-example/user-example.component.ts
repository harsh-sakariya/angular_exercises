import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-example',
  // templateUrl: './user-example.component.html',
  template: `
    <p class="text-danger">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <p class="text-success">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <p class="text-warning">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  `,
  styleUrls: ['./user-example.component.css']
})
export class UserExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
