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
  public formLogin: FormGroup; // Create FormGroup instance
  constructor(private router: Router, private fb: FormBuilder) {
    this.formLogin = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}
  get fem() {
    return this.formLogin.controls;
  }
  onSubmit() {
    if (this.formLogin.valid) {
      Swal.fire('Success Login!', 'Akun anda terverifikasi!', 'success');
      this.router.navigateByUrl('/dashboard/home');
    }
  }
  // goHomePage() {
  //   this.router.navigateByUrl('/dashboard/home');
  // }
}
