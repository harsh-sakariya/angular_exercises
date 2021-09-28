import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/shared/job.model';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[];
  constructor(private jobsService: JobsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.jobs = this.jobsService.jobs;
  }

  onEdit(id: number){
    this.router.navigate([id, 'edit'], {relativeTo: this.route});
  }

  onViewJob(id: number){
    this.router.navigate([id], {relativeTo: this.route});
  }
}
