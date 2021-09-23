import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  colors = ['green', 'yellow', 'white', 'red'];
  constructor() { }

  ngOnInit(): void {
  }

}
