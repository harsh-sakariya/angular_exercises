import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Job } from 'src/app/shared/job.model';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  job: Job;
  title: string = '';
  company: string = '';
  place: string = '';

  constructor(private jobsService: JobsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.job = this.jobsService.getJob(id);
        this.title = this.job.title;
        this.company = this.job.company;
        this.place = this.job.place;
      }
    )
  }

  onUpdate(){
    if(!this.title || !this.company || !this.place){
      alert("Empty fields!");
      return;
    }
    this.job.title = this.title;
    this.job.company = this.company;
    this.job.place = this.place;
    this.job.time = this.jobsService.getCurrentTime();
  }

}
