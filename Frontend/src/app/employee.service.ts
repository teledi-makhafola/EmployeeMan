import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Employee } from './interface/employee';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "http://localhost:8080/employees";
  
  constructor(private http: HttpClient) { 
  }
  
  getEmployeeList(){  
    return this.http.get<Employee[]>(`${this.url}`);  
  }

  addEmployee(employee: Employee): Observable<Object> {  
    return this.http.post(`${this.url}`, employee);  
  } 

  getEmployeeById(id: any): Observable<Employee>{
    return this.http.get<Employee>(`${this.url}/${id}`);
  }

  updateEmployee(id: any, employee: any): Observable<Object>{
    return this.http.put(`${this.url}/${id}`, employee);
  }

  deleteEmployee(id: any): Observable<Object>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
