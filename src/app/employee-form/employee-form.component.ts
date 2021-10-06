import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../_service/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent{

  constructor(private employeeService: EmployeeService) { }

  @ViewChild('f') form: NgForm;
  
  getGender(genderObj: {male: boolean, female: boolean}){
    let gender = '';
    let count = 0;
    for(let key in genderObj){
      if(genderObj[key] === true){
        count++;
        gender = key;
      }
    }
    if(count === 0){
      alert("please select gender");
      return null;
    }
    if(count > 1){
      alert("please select only one gender");
      return null;
    }
    return gender;
  }

  onSubmit(){
    const formData = this.form.value;
    const gender = this.getGender(formData.gender);
    if(gender){
      const data: Employee = {...formData, gender: gender};
      this.employeeService.addEmployee(data);
      console.log(data);
    }
  }

}
