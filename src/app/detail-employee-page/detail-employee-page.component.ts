import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-employee-page',
  templateUrl: './detail-employee-page.component.html',
  styleUrls: ['./detail-employee-page.component.scss'],
})
export class DetailEmployeePageComponent implements OnInit {
  // inisiasi data untuk ditampilkan dalam detail
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  birthDate: string = '';
  basicSalary: number = 0;
  status: string = '';
  group: string = '';
  description: string = '';
  // ini siasi routing dan aktif route
  constructor(private router: Router, private route: ActivatedRoute) {}
  // panggil dan tangkap routing yang sudah terkirim lewat param
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
      this.firstName = params['firstName'];
      this.lastName = params['lastName'];
      this.email = params['email'];
      this.birthDate = params['birthDate'];
      this.basicSalary = params['basicSalary'];
      this.status = params['status'];
      this.group = params['group'];
      this.description = params['description'];
    });
  }
  // adding routing page ke dashboard employee
  goEmployeePage() {
    this.router.navigateByUrl('/dashboard/employee');
  }
}
