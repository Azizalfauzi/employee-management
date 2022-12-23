import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutPageComponent } from './about-page/about-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SidebarPageComponent } from './sidebar-page/sidebar-page.component';
import { WrapperPageComponent } from './wrapper-page/wrapper-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchEmployeePipe } from './employee-page/search-employee.pipe';
import { DetailEmployeePageComponent } from './detail-employee-page/detail-employee-page.component';
import { AddEmployeePageComponent } from './add-employee-page/add-employee-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    FooterPageComponent,
    HomePageComponent,
    AboutPageComponent,
    EmployeePageComponent,
    LoginPageComponent,
    SidebarPageComponent,
    WrapperPageComponent,
    SearchEmployeePipe,
    DetailEmployeePageComponent,
    AddEmployeePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
