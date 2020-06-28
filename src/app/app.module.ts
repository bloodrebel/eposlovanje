import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyMaterialModule } from './material.module';


import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { LoginComponent } from './login/login.component';
import {ErrorComponent} from './error.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BasicAuthInterceptor} from './basicauth.interceptor.service';
import {MatTableModule} from '@angular/material';
import { JobsComponent } from './jobs/jobs.component';
const appRoutes: Routes = [
  { path: 'todo-list', component: CustomerListComponent},
  { path: 'todo-list/:id', component: CustomerListComponent},
  { path: 'jobs-list', component: JobsComponent},
  { path: 'jobs-list/:id', component: CustomerCreateComponent },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '*',
    component: LoginComponent
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    ErrorComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MyMaterialModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  entryComponents: [ErrorComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
