import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  // inisiasi form group
  public formLogin: FormGroup; // Create FormGroup instance
  // init router dan form builder
  constructor(private router: Router, private fb: FormBuilder) {
    // validasi method form
    this.formLogin = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
  // validasi method username
  get userName() {
    return this.formLogin.get('username');
  }
  // validasi method password
  get passWord() {
    return this.formLogin.get('password');
  }
  ngOnInit(): void {}
  // adding notification dan routing apabila data sudah benar
  onSubmit() {
    if (this.formLogin.valid) {
      Swal.fire('Success Login!', 'Akun anda terverifikasi!', 'success');
      this.router.navigateByUrl('/dashboard/home');
    }
  }
}
