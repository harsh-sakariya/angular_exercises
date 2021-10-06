import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Employee } from "../shared/employee.model";

@Injectable({providedIn: 'root'})
export class EmployeeService{
  employees: Employee[] = [];
  employeeAdded = new Subject<Employee[]>();

  addEmployee(employee: Employee){
    this.employees.push(employee);
    this.employeeAdded.next(this.employees);
  }
}