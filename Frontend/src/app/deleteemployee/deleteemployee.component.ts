import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit  {

  id:any;
  employee: Employee = new Employee();
   constructor(private employeeService: EmployeeService, 
     private router:Router,
     private route:ActivatedRoute){}
   ngOnInit():void{
     this.getEmployee(this.id = this.route.snapshot.params['id']);
   }
   private getEmployee(id:any){
     this.employeeService.getEmployeeById(this.id).subscribe(data => {
       console.log(data);
       this.employee = data;
     }, error => console.log(error));
   }
   confirmDelete(id:any){
     this.employeeService.deleteEmployee(id).subscribe( data => {
       console.log(data);
      this.getEmployee(this.id = this.route.snapshot.params['id']); 
      this.router.navigate(['./home']);
     });
 
   } 
}
