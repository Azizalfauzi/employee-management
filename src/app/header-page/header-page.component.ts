import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss'],
})
export class HeaderPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goAboutPage() {
    this.router.navigateByUrl('/dashboard/about');
  }
  goHomePage() {
    this.router.navigateByUrl('/dashboard/home');
  }
  goEmployeePage() {
    this.router.navigateByUrl('/dashboard/employee');
  }
}
