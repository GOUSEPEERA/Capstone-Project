import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { AddAdminComponent } from './component/add-admin/add-admin.component';
import { AdminManagerComponent } from './component/admin-manager/admin-manager.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomeComponent } from './component/home/home.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { ErrorComponent } from './component/error/error.component';
import { ReportLandingPageComponent } from './component/report-landing-page/report-landing-page.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AvailableRoomsComponent } from './component/available-rooms/available-rooms.component';
import { BookingComponent } from './component/booking/booking.component';
import { ListCustomersComponent } from './component/list-customers/list-customers.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'available-rooms', component: AvailableRoomsComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminManagerComponent },
  { path: 'admin/add', component: AddAdminComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'report-home', component: ReportLandingPageComponent },
  { path: '**', component: ErrorComponent },
  {path:'list-customers',component:ListCustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
