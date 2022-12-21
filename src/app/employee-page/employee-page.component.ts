import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination/public-api';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss'],
})
export class EmployeePageComponent implements OnInit {
  title: any;
  listData: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  constructor(private employeeServices: EmployeeService) {}
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.employeeServices.getAllPost().subscribe((resp) => {
      this.listData = resp;
      console.log(this.listData);
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getList();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getList();
  }
}
