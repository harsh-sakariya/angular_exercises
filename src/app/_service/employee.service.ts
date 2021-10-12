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

  getEmployees(){
    this.dataStorageService.getData().subscribe(
      (responseData) => {
        this.employeeAdded.next(responseData);
      }
    )
  }

  addEmployee(employee: Employee){
    this.dataStorageService.addData(employee).subscribe(
      response => {
        console.log(response);
        this.getEmployees();
      }
    )
  }

  deleteEmployee(employeeId){
    this.dataStorageService.deleteData(employeeId).subscribe(
      (response)=>{
        console.log(response);
        this.getEmployees();
      }
    )
  }
}