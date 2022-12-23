import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee-page',
  templateUrl: './add-employee-page.component.html',
  styleUrls: ['./add-employee-page.component.scss'],
})
export class AddEmployeePageComponent implements OnInit {
  // inisiasi form group
  public formAddEmployee: FormGroup;
  // init routing dan form builder pemanggilan
  constructor(private router: Router, private fb: FormBuilder) {
  //  validasi form method
    this.formAddEmployee = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      birthDate: new FormControl('', Validators.required),
      basicSalary: new FormControl('', [
        Validators.required,
        Validators.pattern('^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$'),
      ]),
      status: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      group: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  // adding routing
  goEmployeePage() {
    this.router.navigateByUrl('/dashboard/employee');
  }
}
