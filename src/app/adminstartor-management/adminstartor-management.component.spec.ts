import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstartorManagementComponent } from './adminstartor-management.component';

describe('AdminstartorManagementComponent', () => {
  let component: AdminstartorManagementComponent;
  let fixture: ComponentFixture<AdminstartorManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstartorManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstartorManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
