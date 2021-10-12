import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from '../shared/employee.model';
import { DataStorageService } from '../_service/data-storage.service';
import { EmployeeService } from '../_service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  subscription: Subscription;
  employees: any[];
  constructor(private employeeService: EmployeeService,
    private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.subscription = this.dataStorageService.getData().subscribe(
      (responseData) => {
        this.employees = responseData;
      }
    )
    this.subscription = this.employeeService.employeeAdded.subscribe(
      (employees: Employee[]) => {
        this.employees = employees;
      }
    )
  }

}
