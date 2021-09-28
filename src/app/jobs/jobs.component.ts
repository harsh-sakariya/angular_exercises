import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  showJobsList: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleJobList(){
    this.showJobsList = !this.showJobsList;
  }

}
