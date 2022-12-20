import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrls: ['./sidebar-page.component.scss'],
})
export class SidebarPageComponent implements OnInit {
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
