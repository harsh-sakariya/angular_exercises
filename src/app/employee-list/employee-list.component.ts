import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../_service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  subscription: Subscription;
  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.subscription = this.employeeService.employeeAdded.subscribe(
      (employees: Employee[]) => {
        this.employees = employees;
      }
    )
  }

}
