import { Component ,OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
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
    name: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    contactNo: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
  });

  submitted = false;

    name:string|undefined;
    lastName!:string|undefined;
    email!:string|undefined;
    contactNo!:string|undefined;
    department!:string|undefined;
    gender!:string|undefined;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,private formBuilder: FormBuilder) { }
    
  ngOnInit() {
    this.id = localStorage.getItem("id");
   // this.id = this.route.snapshot.params['id'];
    this.getIemp()
   // this.id = this.route.snapshot.params['id'];
   this.editForm = this.formBuilder.group(
    {
      name: ['', [Validators.required]],
      lastName: ['',[Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      department: ['', [Validators.required, Validators.email]],
      contactNo: [
        '',
        [
          Validators.required,
          Validators.pattern("^((\+91-?)|0)?[0-9]{10}$"),
          Validators.maxLength(10),
        ]
      ],
    },
  );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.editForm.controls;
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
  this.submitted = true;
    if (this.editForm.invalid) {
      return;
  }
  console.log(JSON.stringify(this.editForm.value, null, 2));
}

onReset(): void {
  this.submitted = false;
  this.editForm.reset();
}

getIemp(){
  this.id = this.route.snapshot.params['id'];
    console.log(this.id)
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

// alertWithSuccess(){
//   Swal.fire('Thank you...', 'You submitted successfully!', 'success')
// }
}