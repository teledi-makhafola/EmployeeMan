import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import Swal from 'sweetalert2';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
})
export class AddemployeeComponent implements OnInit {
  employee: Employee = new Employee();

  form: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
    contactNo: new FormControl('',Validators.required),
  });
  submitted = false;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        lastName: ['',[Validators.required,]],
        email: ['', [Validators.required, Validators.email]],
        department: [''],
        contactNo: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[0-9]{10}$/),
             Validators.maxLength(10),
          ]
        ],
      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  saveEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/home']);
  }

  onSubmit() { 
    console.log(this.employee);
    this.saveEmployee();
    this.submitted = true;
    if (this.form.valid) {
      alert("Employee Successfully added!");
  } else  if (this.form.invalid) {
    alert("Invalid fields!!!")
    
  }
  console.log(JSON.stringify(this.form.value, null, 2));
}
onReset(): void {
  this.submitted = false;
  this.form.reset();
}

  simpleAlert() {
    Swal.fire('Successfully Added!');
   }
}
