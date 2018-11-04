import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerManagementComponent } from './lecturer-management.component';

describe('LecturerManagementComponent', () => {
  let component: LecturerManagementComponent;
  let fixture: ComponentFixture<LecturerManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
