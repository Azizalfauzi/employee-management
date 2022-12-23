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
  // fake data dummy list employee
  data = {
    employee: [
      {
        username: 1,
        firstName: 'Aziz',
        lastName: 'Aziz Alfauzi',
        email: 'azizalfauzi65@gmail.com',
        birthDate: '12 November 1998',
        basicSalary: 650000,
        status: 'Pegawai',
        group: 1,
        description: 'adalah seorang programmer',
      },
      {
        username: 2,
        firstName: 'Budi',
        lastName: 'Budi Permana',
        email: 'budipermana@gmail.com',
        birthDate: '22 Mei 1990',
        basicSalary: 750000,
        status: 'Pegawai',
        group: 1,
        description: 'adalah seorang designer',
      },
      {
        username: 3,
        firstName: 'Cindy',
        lastName: 'Cindy Kusuma',
        email: 'cindykusuma@gmail.com',
        birthDate: '17 April 1995',
        basicSalary: 850000,
        status: 'Pegawai',
        group: 2,
        description: 'adalah seorang manager proyek',
      },
      {
        username: 4,
        firstName: 'Dani',
        lastName: 'Dani Prasetyo',
        email: 'daniprasetyo@gmail.com',
        birthDate: '15 Desember 1992',
        basicSalary: 950000,
        status: 'Pegawai',
        group: 2,
        description: 'adalah seorang analis data',
      },
      {
        username: 5,
        firstName: 'Eka',
        lastName: 'Eka Sari',
        email: 'ekasari@gmail.com',
        birthDate: '30 Juli 1999',
        basicSalary: 1050000,
        status: 'Pegawai',
        group: 3,
        description: 'adalah seorang content creator',
      },
      {
        username: 6,
        firstName: 'Fajar',
        lastName: 'Fajar Setiawan',
        email: 'fajarsetiawan@gmail.com',
        birthDate: '12 Januari 1996',
        basicSalary: 1150000,
        status: 'Pegawai',
        group: 3,
        description: 'adalah seorang social media specialist',
      },
      {
        username: 7,
        firstName: 'Gina',
        lastName: 'Gina Kurnia',
        email: 'ginakurnia@gmail.com',
        birthDate: '22 September 1991',
        basicSalary: 1250000,
        status: 'Pegawai',
        group: 4,
        description: 'adalah seorang marketer',
      },
      {
        username: 8,
        firstName: 'Hendi',
        lastName: 'Hendi Sutanto',
        email: 'hendisutanto@gmail.com',
        birthDate: '11 Agustus 1997',
        basicSalary: 1350000,
        status: 'Pegawai',
        group: 4,
        description: 'adalah seorang sales executive',
      },
      {
        username: 9,
        firstName: 'Iman',
        lastName: 'Iman Pratama',
        email: 'imanpratama@gmail.com',
        birthDate: '11 Agustus 1997',
        basicSalary: 1450000,
        status: 'Pegawai',
        group: 5,
        description: 'adalah seorang teknisi',
      },
      {
        username: 10,
        firstName: 'Joko',
        lastName: 'Joko Susanto',
        email: 'jokosusanto@gmail.com',
        birthDate: '20 Mei 1994',
        basicSalary: 1550000,
        status: 'Pegawai',
        group: 5,
        description: 'adalah seorang network engineer',
      },
      {
        username: 11,
        firstName: 'Kiki',
        lastName: 'Kiki Dewi',
        email: 'kikidewi@gmail.com',
        birthDate: '17 Januari 1993',
        basicSalary: 1650000,
        status: 'Pegawai',
        group: 6,
        description: 'adalah seorang akuntan',
      },
      {
        username: 12,
        firstName: 'Lina',
        lastName: 'Lina Wati',
        email: 'linawati@gmail.com',
        birthDate: '22 Desember 2000',
        basicSalary: 1750000,
        status: 'Pegawai',
        group: 6,
        description: 'adalah seorang HRD specialist',
      },
      {
        username: 13,
        firstName: 'Miko',
        lastName: 'Miko Ramadhana',
        email: 'mikoramadhana@gmail.com',
        birthDate: '11 September 1998',
        basicSalary: 1850000,
        status: 'Pegawai',
        group: 7,
        description: 'adalah seorang teknisi mesin',
      },
      {
        username: 14,
        firstName: 'Niko',
        lastName: 'Niko Anggoro',
        email: 'nikoanggoro@gmail.com',
        birthDate: '20 Juli 1996',
        basicSalary: 1950000,
        status: 'Pegawai',
        group: 7,
        description: 'adalah seorang teknisi elektronik',
      },
      {
        username: 15,
        firstName: 'Ovi',
        lastName: 'Ovi Arianto',
        email: 'oviarianto@gmail.com',
        birthDate: '17 Mei 1995',
        basicSalary: 2050000,
        status: 'Pegawai',
        group: 8,
        description: 'adalah seorang pengembang aplikasi',
      },
      {
        username: 16,
        firstName: 'Puspa',
        lastName: 'Puspa Sari',
        email: 'puspasari@gmail.com',
        birthDate: '30 Desember 1999',
        basicSalary: 2150000,
        status: 'Pegawai',
        group: 8,
        description: 'adalah seorang pemrogram web',
      },
      {
        username: 17,
        firstName: 'Rina',
        lastName: 'Rina Permata',
        email: 'rinapermata@gmail.com',
        birthDate: '11 Agustus 1997',
        basicSalary: 2250000,
        status: 'Pegawai',
        group: 9,
        description: 'adalah seorang pengembang game',
      },
      {
        username: 18,
        firstName: 'Sari',
        lastName: 'Sari Dewi',
        email: 'saridewi@gmail.com',
        birthDate: '20 Mei 1994',
        basicSalary: 2350000,
        status: 'Pegawai',
        group: 9,
        description: 'adalah seorang pengembang mobile app',
      },
      {
        username: 19,
        firstName: 'Tari',
        lastName: 'Tari Kartika',
        email: 'tarikartika@gmail.com',
        birthDate: '17 Januari 1993',
        basicSalary: 2450000,
        status: 'Pegawai',
        group: 10,
        description: 'adalah seorang pengembang sistem',
      },
      {
        username: 20,
        firstName: 'Uci',
        lastName: 'Uci Kurnia',
        email: 'ucikurnia@gmail.com',
        birthDate: '22 Desember 2000',
        basicSalary: 2550000,
        status: 'Pegawai',
        group: 10,
        description: 'adalah seorang pengembang cloud',
      },
      {
        username: 21,
        firstName: 'Vina',
        lastName: 'Vina Puspa',
        email: 'vinapuspa@gmail.com',
        birthDate: '11 September 1998',
        basicSalary: 2650000,
        status: 'Pegawai',
        group: 11,
        description: 'adalah seorang pengembang big data',
      },
      {
        username: 22,
        firstName: 'Wahyu',
        lastName: 'Wahyu Setiawan',
        email: 'wahyusetiawan@gmail.com',
        birthDate: '20 Juli 1996',
        basicSalary: 2750000,
        status: 'Pegawai',
        group: 11,
        description: 'adalah seorang pengembang IoT',
      },
      {
        username: 23,
        firstName: 'Xena',
        lastName: 'Xena Pratiwi',
        email: 'xenapratiwi@gmail.com',
        birthDate: '17 Mei 1995',
        basicSalary: 2850000,
        status: 'Pegawai',
        group: 12,
        description: 'adalah seorang pengembang AI',
      },
      {
        username: 24,
        firstName: 'Yuna',
        lastName: 'Yuna Wijaya',
        email: 'yunawijaya@gmail.com',
        birthDate: '30 Desember 1999',
        basicSalary: 2950000,
        status: 'Pegawai',
        group: 12,
        description: 'adalah seorang pengembang VR',
      },
      {
        username: 25,
        firstName: 'Zara',
        lastName: 'Zara Amalia',
        email: 'zaraamalia@gmail.com',
        birthDate: '11 Agustus 1997',
        basicSalary: 3050000,
        status: 'Pegawai',
        group: 13,
        description: 'adalah seorang pengembang AR',
      },
      {
        username: 26,
        firstName: 'Alfa',
        lastName: 'Alfa Rizki',
        email: 'alfarizki@gmail.com',
        birthDate: '20 Mei 1994',
        basicSalary: 3150000,
        status: 'Pegawai',
        group: 13,
        description: 'adalah seorang pengembang blockchain',
      },
      {
        username: 27,
        firstName: 'Beta',
        lastName: 'Beta Perdana',
        email: 'betaperdana@gmail.com',
        birthDate: '17 Januari 1993',
        basicSalary: 3250000,
        status: 'Pegawai',
        group: 14,
        description: 'adalah seorang pengembang machine learning',
      },
      {
        username: 28,
        firstName: 'Gamma',
        lastName: 'Gamma Putri',
        email: 'gammaputri@gmail.com',
        birthDate: '22 Desember 2000',
        basicSalary: 3350000,
        status: 'Pegawai',
        group: 14,
        description: 'adalah seorang pengembang deep learning',
      },
      {
        username: 29,
        firstName: 'Delta',
        lastName: 'Delta Wibawa',
        email: 'deltawibawa@gmail.com',
        birthDate: '11 September 1998',
        basicSalary: 3450000,
        status: 'Pegawai',
        group: 15,
        description: 'adalah seorang pengembang robotics',
      },
      {
        username: 30,
        firstName: 'Epsilon',
        lastName: 'Epsilon Utami',
        email: 'epsilonutami@gmail.com',
        birthDate: '20 Juli 1996',
        basicSalary: 3550000,
        status: 'Pegawai',
        group: 15,
        description: 'adalah seorang pengembang drone',
      },
      {
        username: 31,
        firstName: 'Zeta',
        lastName: 'Zeta Putra',
        email: 'zetaputra@gmail.com',
        birthDate: '17 Mei 1995',
        basicSalary: 3650000,
        status: 'Pegawai',
        group: 16,
        description: 'adalah seorang pengembang automation',
      },
      {
        username: 32,
        firstName: 'Eta',
        lastName: 'Eta Sari',
        email: 'etasari@gmail.com',
        birthDate: '30 Desember 1999',
        basicSalary: 3750000,
        status: 'Pegawai',
        group: 16,
        description: 'adalah seorang pengembang virtual assistant',
      },
      {
        username: 33,
        firstName: 'Theta',
        lastName: 'Theta Pratama',
        email: 'thetapratama@gmail.com',
        birthDate: '11 Agustus 1997',
        basicSalary: 3850000,
        status: 'Pegawai',
        group: 17,
        description: 'adalah seorang pengembang chatbot',
      },
      {
        username: 34,
        firstName: 'Iota',
        lastName: 'Iota Hasanah',
        email: 'iotahasanah@gmail.com',
        birthDate: '20 Mei 1994',
        basicSalary: 3950000,
        status: 'Pegawai',
        group: 17,
        description: 'adalah seorang pengembang machine translation',
      },
      {
        username: 35,
        firstName: 'Kappa',
        lastName: 'Kappa Nugraha',
        email: 'kappanugraha@gmail.com',
        birthDate: '17 Januari 1993',
        basicSalary: 4050000,
        status: 'Pegawai',
        group: 18,
        description: 'adalah seorang pengembang natural language processing',
      },
      {
        username: 36,
        firstName: 'Lambda',
        lastName: 'Lambda Rahayu',
        email: 'lambdarahayu@gmail.com',
        birthDate: '22 Desember 2000',
        basicSalary: 4150000,
        status: 'Pegawai',
        group: 18,
        description: 'adalah seorang pengembang computer vision',
      },
      {
        username: 37,
        firstName: 'Mu',
        lastName: 'Mu Fadhil',
        email: 'mufadhil@gmail.com',
        birthDate: '11 September 1998',
        basicSalary: 4250000,
        status: 'Pegawai',
        group: 19,
        description: 'adalah seorang pengembang speech recognition',
      },
      {
        username: 38,
        firstName: 'Nu',
        lastName: 'Nu Kurnia',
        email: 'nukurnia@gmail.com',
        birthDate: '20 Juli 1996',
        basicSalary: 4350000,
        status: 'Pegawai',
        group: 19,
        description: 'adalah seorang pengembang biometrics',
      },
      {
        username: 39,
        firstName: 'adrian',
        lastName: 'adrian',
        email: 'add@gmail.com',
        birthDate: '20 Juli 1996',
        basicSalary: 4350000,
        status: 'Pegawai',
        group: 19,
        description: 'adalah seorang pengembang bom',
      },
      {
        username: 40,
        firstName: 'Omicron',
        lastName: 'Omicron Pratama',
        email: 'omicronpratama@gmail.com',
        birthDate: '17 Mei 1995',
        basicSalary: 4450000,
        status: 'Pegawai',
        group: 20,
        description: 'adalah seorang pengembang cyber security',
      },
      {
        username: 41,
        firstName: 'Pi',
        lastName: 'Pi Wijaya',
        email: 'piwijaya@gmail.com',
        birthDate: '30 Desember 1999',
        basicSalary: 4550000,
        status: 'Pegawai',
        group: 20,
        description: 'adalah seorang pengembang data security',
      },
      {
        username: 42,
        firstName: 'Rho',
        lastName: 'Rho Amalia',
        email: 'rhoamalia@gmail.com',
        birthDate: '11 Agustus 1997',
        basicSalary: 4650000,
        status: 'Pegawai',
        group: 21,
        description: 'adalah seorang pengembang network security',
      },
      {
        username: 43,
        firstName: 'Sigma',
        lastName: 'Sigma Putra',
        email: 'sigmaputra@gmail.com',
        birthDate: '20 Mei 1994',
        basicSalary: 4750000,
        status: 'Pegawai',
        group: 21,
        description: 'adalah seorang pengembang application security',
      },
      {
        username: 44,
        firstName: 'Tau',
        lastName: 'Tau Nugraha',
        email: 'taunugraha@gmail.com',
        birthDate: '17 Januari 1993',
        basicSalary: 4850000,
        status: 'Pegawai',
        group: 22,
        description: 'adalah seorang pengembang cloud security',
      },
      {
        username: 45,
        firstName: 'Upsilon',
        lastName: 'Upsilon Rahayu',
        email: 'upsilonrahayu@gmail.com',
        birthDate: '22 Desember 2000',
        basicSalary: 4950000,
        status: 'Pegawai',
        group: 22,
        description: 'adalah seorang pengembang internet security',
      },
      {
        username: 46,
        firstName: 'Phi',
        lastName: 'Phi Kurnia',
        email: 'phikurnia@gmail.com',
        birthDate: '11 September 1998',
        basicSalary: 5050000,
        status: 'Pegawai',
        group: 23,
        description: 'adalah seorang pengembang mobile security',
      },
    ],
  };
  // get fake data with observable
  getAllPost(): Observable<any> {
    return of(this.data.employee);
  }
}
