import { Component, OnInit} from '@angular/core';
import { StudentLoginService } from './studentLogin.service';
import { Student } from './shared/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StudentLoginService]
})
export class AppComponent implements OnInit{
  constructor(private studentLoginService: StudentLoginService) {}

  ngOnInit(){
    this.studentLoginService.studentAdded.subscribe(
      (students: Student[]) => {
        console.log(students[students.length-1]);
      }
    )
  }
}
