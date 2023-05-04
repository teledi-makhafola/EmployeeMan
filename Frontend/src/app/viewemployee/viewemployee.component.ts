import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  id?: any;
  employee: Employee = new Employee();
  // id = this.route.snapshot.params['id']; 
  constructor(private employeeService:EmployeeService, private route: ActivatedRoute){
    this.route.paramMap.subscribe(paraMap => {
      // console.log(paraMap.get('id'))
      this.id = paraMap.get('id')
    })
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      console.log(data);
      this.employee = data;
    })
  }
}
