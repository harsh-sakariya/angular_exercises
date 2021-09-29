import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { EditJobComponent } from './jobs/edit-job/edit-job.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { JobsComponent } from './jobs/jobs.component';
import { PostJobComponent } from './jobs/post-job/post-job.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'job', component: JobsComponent, children: [
    {path: 'new', component: PostJobComponent},
    {path: ':id', component: JobDetailsComponent},
    {path: ':id/edit', canActivate: [AuthGuard], component: EditJobComponent}
  ]},
  { path: 'page-not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
