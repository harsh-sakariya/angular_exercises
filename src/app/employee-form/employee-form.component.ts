import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EmployeeService } from '../_service/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit{
  employeeForm: FormGroup;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(){
    this.employeeForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z]\w+.?\s[A-Z]\w+.?$/)]),
      'company': new FormControl(null, Validators.required),
      'area': new FormControl('area1', Validators.required),
      'mobile': new FormControl(null, [Validators.required, Validators.pattern(/^\+\d{3}-\d{2}-\d{3}/)]),
      'isNewToCompany': new FormControl('yes'),
      'gender': new FormGroup({
        'male': new FormControl(),
        'female': new FormControl()
      })
    })
  }
  
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
    let formData = this.employeeForm.value;
    const gender = this.getGender(formData.gender);
    if(gender){
      formData = { ...formData, gender: gender};
      this.employeeService.addEmployee(formData);
    }
  }

}
