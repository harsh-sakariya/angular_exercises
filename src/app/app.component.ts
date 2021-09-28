import { Component, OnInit} from '@angular/core';
import { JobsService } from './jobs/jobs.service';
import { LoginService } from './login/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService, JobsService]
})
export class AppComponent implements OnInit{
  constructor() {}

  ngOnInit(){
    
  }
}
