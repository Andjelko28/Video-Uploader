import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { PagesModule } from './components/pages/pages.module';


@NgModule({
  declarations: [AppComponent],
  bootstrap:[AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    PagesModule
  ]
})
export class AppModule { }
