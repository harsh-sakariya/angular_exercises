import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Employee } from "../shared/employee.model";

@Injectable({providedIn: 'root'})
export class DataStorageService{
  employee = new BehaviorSubject<Employee>(null);
  
  constructor(private http: HttpClient) {}

  addData(data){
    return this.http.post(
      'https://ng-form-http-exercise-default-rtdb.firebaseio.com/employees.json',
      data
    ).pipe(
      tap(
        ()=>{
          this.employee.next(data);
        }
      )
    )
  }

  getData(){
    return this.http.get(
      'https://ng-form-http-exercise-default-rtdb.firebaseio.com/employees.json'
    )
    .pipe(
      map((responseData)=>{
        let responseArr = [];
        for(let key in responseData){
          responseArr.push({ ...responseData[key], id: key });
        }
        return responseArr;
      })
    );
  }

}