import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelpersModule } from '../helpers/helpers.module';
import { UploadComponent } from './upload/upload.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HelpersModule
  ]
})
export class PagesModule { }
