import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Job } from 'src/app/shared/job.model';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job: Job;
  constructor(private route: ActivatedRoute,
              private jobsService: JobsService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        if(this.jobsService.getJob(id)){
          this.job = this.jobsService.getJob(id);
        } else {
          this.router.navigate(['page-not-found']);
        }
      }
    )
  }

}
