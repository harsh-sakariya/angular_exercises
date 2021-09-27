import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StudentLoginService } from '../studentLogin.service';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  @ViewChild('instituteName') instituteName: ElementRef;

  constructor(private studentLoginService: StudentLoginService) { }

  ngOnInit(): void {

  }

  onAddStudent(){
    const name = this.name.nativeElement.value;
    const instituteName = this.instituteName.nativeElement.value;
    const loginTime = this.studentLoginService.getCurrentTime();

    if(!name.trim() || !instituteName.trim()){
      alert("empty fields");
      return;
    }

    const newStudent = new Student(name, instituteName, loginTime);
    this.studentLoginService.addStudent(newStudent);
    this.name.nativeElement.value = '';
    this.instituteName.nativeElement.value = '';
  }
}
