import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination/public-api';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss'],
})
export class EmployeePageComponent implements OnInit {
  // inisiasi pagination paging and count
  title: any;
  listData: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  constructor(
    private employeeServices: EmployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getList();
  }
  // get data table
  getList() {
    this.employeeServices.getAllPost().subscribe((resp) => {
      this.listData = resp;
      console.log(this.listData);
    });
  }
  // pagination
  onTableDataChange(event: any) {
    this.page = event;
    this.getList();
  }
  // handle size with paging dropdown
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getList();
  }
  // routing add employee
  goAddEmployeePage() {
    this.router.navigateByUrl('/dashboard/addemployee');
  }
  // routing dengan query params dengan data object
  goDetailEmployeePage(
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    birthDate: string,
    basicSalary: string,
    status: string,
    group: string,
    description: string
  ) {
    this.router.navigate(['/dashboard/detailemployee'], {
      queryParams: {
        username: username,
        firstName: firstname,
        lastName: lastname,
        email: email,
        birthDate: birthDate,
        basicSalary: basicSalary,
        status: status,
        group: group,
        description: description,
      },
    });
  }
  // notifikasi edit data
  editData() {
    Swal.fire({
      icon: 'warning',
      title: 'Edit data',
      text: 'Apakah anda yakin mengedit data ini ?',
    });
  }
  // notifikasi delete data
  deleteData() {
    Swal.fire({
      icon: 'error',
      title: 'Delete data',
      text: 'Apakah anda yakin menghapus data ini ?',
    });
  }
}
