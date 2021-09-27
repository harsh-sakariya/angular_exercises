import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student.model';
import { StudentLoginService } from '../studentLogin.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: Student[];

  constructor(private studentLoginService: StudentLoginService) { }

  ngOnInit(): void {
    this.students = this.studentLoginService.getStudents();
    this.studentLoginService.studentAdded.subscribe(
      (students: Student[]) => {
        this.students = students;
      }
    )
  }

}
