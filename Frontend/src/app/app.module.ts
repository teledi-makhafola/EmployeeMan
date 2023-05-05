import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { LandingComponent } from './landing/landing.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    FooterComponent,
    HeaderComponent,
    ViewemployeeComponent,
    LandingComponent,
    ModalComponent,
    DeleteemployeeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
