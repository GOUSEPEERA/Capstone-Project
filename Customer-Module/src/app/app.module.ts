import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { AdminManagerComponent } from './component/admin-manager/admin-manager.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { AddAdminComponent } from './component/add-admin/add-admin.component';
import { HomeComponent } from './component/home/home.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ErrorComponent } from './component/error/error.component';
import { HttpClientModule} from '@angular/common/http' ;
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReportLandingPageComponent } from './component/report-landing-page/report-landing-page.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { AvailableRoomsComponent } from './component/available-rooms/available-rooms.component';
import { BookingComponent } from './component/booking/booking.component';
import { ListCustomersComponent } from './component/list-customers/list-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AdminManagerComponent,
    SpinnerComponent,
    AddAdminComponent,
    HomeComponent,
    RoomsComponent,
    AboutUsComponent,
    ContactUsComponent,
    ErrorComponent,
    ReportLandingPageComponent,
    SignupComponent,
    LoginComponent,
    AvailableRoomsComponent,
    BookingComponent,
    ListCustomersComponent
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
