import { EventEmitter } from '@angular/core';
import { Student } from './shared/student.model';

export class StudentLoginService{
    studentAdded = new EventEmitter<Student[]>();

    students: Student[] = [
        new Student('test1','test1','27-8-2021 13:41:39'),
        new Student('test2','test2','27-8-2021 13:42:07')
    ];

    getCurrentTime(){
        const loginTime = new Date();
        return `${loginTime.getDate()}-${loginTime.getMonth()}-${loginTime.getFullYear()}  ${loginTime.getHours()}:${loginTime.getMinutes()}:${loginTime.getSeconds()}`;
    }

    getStudents(){
        return this.students.slice();
    }

    addStudent(student: Student){
        this.students.push(student);
        this.studentAdded.emit(this.students);
    }
}