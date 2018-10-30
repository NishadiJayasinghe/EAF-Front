import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { StudentsLoginComponent } from './students-login/students-login.component';
import {RouterModule} from '@angular/router';
import { LecturersLoginComponent } from './lecturers-login/lecturers-login.component';
import { AdminsLoginComponent } from './admins-login/admins-login.component';
import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { NavbarModule} from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    StudentsLoginComponent,
    LecturersLoginComponent,
    AdminsLoginComponent
  
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule,
    WavesModule,
    ButtonsModule,
    NavbarModule,
    RouterModule.forRoot([{
      path: '',
      component:IndexComponent
    },
    {
      path: 'student',
      component:StudentsLoginComponent
    },
    {
      path: 'lecturer',
      component:LecturersLoginComponent
    },
    {
      path: 'admin',
      component:AdminsLoginComponent
    }
  ])
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
