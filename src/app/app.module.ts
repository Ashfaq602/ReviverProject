import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OncologyComponent } from './oncology/oncology.component';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { PulmonologyComponent } from './pulmonology/pulmonology.component';
import { UrologyComponent } from './urology/urology.component';
import { DermatologyComponent } from './dermatology/dermatology.component';
import { MedicalstoreComponent } from './medicalstore/medicalstore.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MedicalserviceService } from './medicalservice.service';
import { HttpClientModule } from '@angular/common/http';
import { OncologymedicinesComponent } from './oncologymedicines/oncologymedicines.component';
import { CardiologymedicinesComponent } from './cardiologymedicines/cardiologymedicines.component';
import { PulmonologymedicinesComponent } from './pulmonologymedicines/pulmonologymedicines.component';
import { UrologymedicinesComponent } from './urologymedicines/urologymedicines.component';
import { DermatologymedicinesComponent } from './dermatologymedicines/dermatologymedicines.component';
import { AllComponent } from './all/all.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { Blogpost1Component } from './blogpost1/blogpost1.component';
import { Blogpost2Component } from './blogpost2/blogpost2.component';
import { Blogpost3Component } from './blogpost3/blogpost3.component';
import { Blogpost4Component } from './blogpost4/blogpost4.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { Profile1Component } from './profile1/profile1.component';
import { Profile2Component } from './profile2/profile2.component';
import { Profile3Component } from './profile3/profile3.component';
import { Profile4Component } from './profile4/profile4.component';
import { Profile5Component } from './profile5/profile5.component';
import { Profile6Component } from './profile6/profile6.component';
import { Profile7Component } from './profile7/profile7.component';
import { Profile8Component } from './profile8/profile8.component';
import { Profile9Component } from './profile9/profile9.component';
import { Profile10Component } from './profile10/profile10.component';
import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaymentsComponent } from './payments/payments.component';
import { AdminComponent } from './admin/admin.component';
import { CartServiceService } from './cart-service.service';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BloglistComponent } from './bloglist/bloglist.component';
import { AddingComponent } from './adding/adding.component';
import { DeleteComponent } from './delete/delete.component';
// import { BookanappointmentComponent } from './bookanappointment/bookanappointment.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogsComponent,
    HomeComponent,
    AboutComponent,
    OncologyComponent,
    CardiologyComponent,
    PulmonologyComponent,
    UrologyComponent,
    DermatologyComponent,
    MedicalstoreComponent,
    OncologymedicinesComponent,
    CardiologymedicinesComponent,
    PulmonologymedicinesComponent,
    UrologymedicinesComponent,
    DermatologymedicinesComponent,
    AllComponent,
    AddtocartComponent,
    Blogpost1Component,
    Blogpost2Component,
    Blogpost3Component,
    Blogpost4Component,
    DoctorsComponent,
    Profile1Component,
    Profile2Component,
    Profile3Component,
    Profile4Component,
    Profile5Component,
    Profile6Component,
    Profile7Component,
    Profile8Component,
    Profile9Component,
    Profile10Component,
    BookingAppointmentComponent,
    LoginComponent,
    RegisterComponent,
    PaymentsComponent,
    AdminComponent,
    BloglistComponent,
    AddingComponent,
    DeleteComponent,
    // BookanappointmentComponent,
    // LoginComponent,
    // SignupComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    ToastrModule.forRoot()
  ],
  
  providers: [MedicalserviceService,
 CartServiceService,
 provideAnimationsAsync()],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
