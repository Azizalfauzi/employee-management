import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmployeePageComponent } from './detail-employee-page.component';

describe('DetailEmployeePageComponent', () => {
  let component: DetailEmployeePageComponent;
  let fixture: ComponentFixture<DetailEmployeePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEmployeePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEmployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
