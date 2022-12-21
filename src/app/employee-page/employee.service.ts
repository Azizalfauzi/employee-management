import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
const endpoint = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  data = {
    employee: [
      {
        username: 1,
        firstName: 1,
        lastName: 'Aziz Alfauzi',
        email: 'azizalfauzi65@gmail.com',
        birthDate: '12 November 1998',
        basicSalary: 650000,
        status: 'Pegawao',
        group: 1,
        description: 'DESC',
      },
      {
        username: 2,
        firstName: 2,
        lastName: 'Wandi',
        email: 'wandi@gmail.com',
        birthDate: '11 Oktober 1998',
        basicSalary: 650000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 3,
        firstName: 3,
        lastName: 'Gilang',
        email: 'gilang@gmail.com',
        birthDate: '7 Juli 2000',
        basicSalary: 550000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 4,
        firstName: 4,
        lastName: 'Farhan',
        email: 'farhan@gmail.com',
        birthDate: '9 November 1998',
        basicSalary: 600000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 5,
        firstName: 5,
        lastName: 'Yudi',
        email: 'yudi@gmail.com',
        birthDate: '15 November 1998',
        basicSalary: 750000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 6,
        firstName: 6,
        lastName: 'Ahmad',
        email: 'ahmad@gmail.com',
        birthDate: '18 Agustus 1997',
        basicSalary: 650000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 7,
        firstName: 7,
        lastName: 'Irma',
        email: 'irma@gmail.com',
        birthDate: '18 Desember 1998',
        basicSalary: 650000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 8,
        firstName: 8,
        lastName: 'Rahmadi',
        email: 'rahmadi@gmail.com',
        birthDate: '16 Mei 1996',
        basicSalary: 150000,
        status: 'CEO',
        group: 1,
        description: 'DESC',
      },
      {
        username: 9,
        firstName: 9,
        lastName: 'Wahyu',
        email: 'wahyu@gmail.com',
        birthDate: '11 Maret 1999',
        basicSalary: 650000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 10,
        firstName: 10,
        lastName: 'Mei',
        email: 'mei@gmail.com',
        birthDate: '6 Juli 1998',
        basicSalary: 650000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 11,
        firstName: 11,
        lastName: 'Rendi',
        email: 'rendi@gmail.com',
        birthDate: '11 Juli 1998',
        basicSalary: 650000,
        status: 'Pegawao',
        group: 1,
        description: 'DESC',
      },
      {
        username: 12,
        firstName: 12,
        lastName: 'Erda',
        email: 'erda@gmail.com',
        birthDate: '15 Maret 1998',
        basicSalary: 650000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 13,
        firstName: 13,
        lastName: 'Ihwan',
        email: 'ihwan@gmail.com',
        birthDate: '7 Juli 2000',
        basicSalary: 550000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 14,
        firstName: 14,
        lastName: 'Andre',
        email: 'andre@gmail.com',
        birthDate: '9 November 1998',
        basicSalary: 600000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 15,
        firstName: 15,
        lastName: 'Ehsan',
        email: 'ehsan@gmail.com',
        birthDate: '15 November 1998',
        basicSalary: 750000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 16,
        firstName: 16,
        lastName: 'Joy Boy',
        email: 'joy@gmail.com',
        birthDate: '18 Agustus 1997',
        basicSalary: 650000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 17,
        firstName: 17,
        lastName: 'Siti',
        email: 'Siti@gmail.com',
        birthDate: '19 Desember 1998',
        basicSalary: 650000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 18,
        firstName: 18,
        lastName: 'Adinda',
        email: 'adinda@gmail.com',
        birthDate: '16 Mei 1996',
        basicSalary: 150000,
        status: 'CEO',
        group: 1,
        description: 'DESC',
      },
      {
        username: 19,
        firstName: 19,
        lastName: 'Renki',
        email: 'renki@gmail.com',
        birthDate: '14 Maret 1999',
        basicSalary: 650000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
      {
        username: 20,
        firstName: 20,
        lastName: 'Fajar',
        email: 'fajar@gmail.com',
        birthDate: '6 Juli 1998',
        basicSalary: 650000,
        status: 'Pegawai',
        group: 1,
        description: 'DESC',
      },
    ],
  };

  getAllPost(): Observable<any> {
    return of(this.data.employee);
  }
}
