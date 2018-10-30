import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersLoginComponent } from './lecturers-login.component';

describe('LecturersLoginComponent', () => {
  let component: LecturersLoginComponent;
  let fixture: ComponentFixture<LecturersLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturersLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
