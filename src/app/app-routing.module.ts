import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AddEmployeePageComponent } from './add-employee-page/add-employee-page.component';
import { DetailEmployeePageComponent } from './detail-employee-page/detail-employee-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { WrapperPageComponent } from './wrapper-page/wrapper-page.component';

// init routing
const routes: Routes = [
  {
    path: 'dashboard',
    component: WrapperPageComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'employee', component: EmployeePageComponent },
      { path: 'detailemployee', component: DetailEmployeePageComponent },
      { path: 'addemployee', component: AddEmployeePageComponent },
    ],
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
