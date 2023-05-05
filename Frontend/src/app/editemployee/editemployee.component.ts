import { Component ,OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  id?: any;
  employee: Employee = new Employee();

  editForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    contactNo: new FormControl(''),
    department: new FormControl(''),
    gender: new FormControl('')
  });

    name:string|undefined;
    lastName!:string|undefined;
    email!:string|undefined;
    contactNo!:string|undefined;
    department!:string|undefined;
    gender!:string|undefined;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  ngOnInit() {
    this.id = localStorage.getItem("id");
   // this.id = this.route.snapshot.params['id'];
    this.getIemp()
   // this.id = this.route.snapshot.params['id'];
  }
    
onSubmit(){
  console.log(this.editForm.value)
  this.employeeService.updateEmployee(this.id, this.editForm.value).subscribe( (data:any) =>{
    // console.log(data)
    // this.name=data.name;
    // this.lastName=data.lastName;
    // this.email=data.email;
    // this.contactNo=data.contactNo;
    // this.department=data.department;
    // this.goToEmployeeList();
  }
  , error => console.log(error));
}

getIemp(){
  //this.id=202;
  this.id = this.route.snapshot.params['id'];
  //this.id = localStorage.getItem("id");
    console.log(this.id)
    //console.log(this.empId)
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      console.log(data)
      this.employee = data;

      this.name=data.name;
      this.lastName=data.lastName;
      this.email=data.email;
      this.contactNo=data.contactNo;
      this.department=data.department;
      this.gender=data.gender;
    }, error => console.log(error));
}
goToEmployeeList(){
  this.router.navigate(['/employees']);
}

alertWithSuccess(){
  Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
}
}