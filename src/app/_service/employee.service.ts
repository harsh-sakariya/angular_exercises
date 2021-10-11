import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { DataStorageService } from "./data-storage.service";
import { Employee } from "../shared/employee.model";

@Injectable({providedIn: 'root'})
export class EmployeeService{
  employees: Employee[] = [];
  employeeAdded = new Subject<Employee[]>();

  constructor(private dataStorageService: DataStorageService) {
    
  }

  addEmployee(employee: Employee){
    this.dataStorageService.addData(employee).subscribe(
      response => {
        console.log(response);
        this.dataStorageService.getData().subscribe(
          (responseData) => {
            this.employeeAdded.next(responseData);
          }
        )
      }
    )
    // this.employees.push(employee);
    // this.employeeAdded.next(this.employees);
  }
}