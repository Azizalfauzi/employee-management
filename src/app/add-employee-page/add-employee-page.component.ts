import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee-page/employee.service';

@Component({
  selector: 'app-add-employee-page',
  templateUrl: './add-employee-page.component.html',
  styleUrls: ['./add-employee-page.component.scss'],
})
export class AddEmployeePageComponent implements OnInit {
  // inisiasi form group
  public formAddEmployee: FormGroup;
  // init routing dan form builder pemanggilan
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private employeeServices: EmployeeService
  ) {
    //  validasi form method
    this.formAddEmployee = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      birthDate: new FormControl('', Validators.required),
      basicSalary: new FormControl('', [
        Validators.required,
        Validators.pattern('^[+]?([0-9]+(?:[.][0-9]*)?|.[0-9]+)$'),
      ]),
      status: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      group: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  // adding routing
  goEmployeePage() {
    this.router.navigateByUrl('/dashboard/employee');
  }
  addData() {
    if (this.formAddEmployee.valid) {
      const data = {
        username: this.formAddEmployee.controls['username'].value,
        firstName: this.formAddEmployee.controls['firstName'].value,
        lastName: this.formAddEmployee.controls['lastName'].value,
        email: this.formAddEmployee.controls['email'].value,
        birthDate: this.formAddEmployee.controls['birthDate'].value,
        basicSalary: this.formAddEmployee.controls['basicSalary'].value,
        status: this.formAddEmployee.controls['status'].value,
        group: this.formAddEmployee.controls['group'].value,
        description: this.formAddEmployee.controls['description'].value,
      };
      this.employeeServices.postData(data);
      this.router.navigateByUrl('/dashboard/employee');
    }
  }
}
