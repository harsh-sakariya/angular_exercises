import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Job } from 'src/app/shared/job.model';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit{
  jobs: Job[];
  @ViewChild('title') title: ElementRef;
  @ViewChild('company') company: ElementRef;
  @ViewChild('place') place: ElementRef;

  constructor(private jobsService: JobsService) { }

  ngOnInit(){
    this.jobs = this.jobsService.jobs;
  }

  onSubmitPost(){
    const title = this.title.nativeElement.value;
    const company = this.company.nativeElement.value;
    const place = this.place.nativeElement.value;
    
    if(!title.trim() || !company.trim() || !place.trim()){
      alert("Empty Fields");
      return;
    }

    const id = this.jobsService.getCurrentLengthOfJobsArray()+1;
    const time = this.jobsService.getCurrentTime();
    const newJob = new Job(id, title, company, place, time);
    this.jobsService.addNewJob(newJob);
  }

}
