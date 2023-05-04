import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
   employee : Employee = new Employee();
  constructor(private employeeService: EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/home']);
  }

  onSubmit(){

    console.log(this.employee);
    this.saveEmployee();
    }
 
}


