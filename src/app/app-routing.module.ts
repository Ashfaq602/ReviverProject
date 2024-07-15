import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OncologyComponent } from './oncology/oncology.component';
import { CardiologyComponent } from './cardiology/cardiology.component';
import { PulmonologyComponent } from './pulmonology/pulmonology.component';
import { UrologyComponent } from './urology/urology.component';
import { DermatologyComponent } from './dermatology/dermatology.component';
import { MedicalstoreComponent } from './medicalstore/medicalstore.component';
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
import { BloglistComponent } from './bloglist/bloglist.component';

// import { BookanappointmentComponent } from './bookanappointment/bookanappointment.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'blogs', component:BlogsComponent},
   { path: 'about', component: AboutComponent },
   
   {
    path:'oncology',
    component:OncologyComponent
   },
   {
    path:'cardiology',
    component:CardiologyComponent
   },
   {
    path:'pulmonology',
    component:PulmonologyComponent
   },
   {
    path:'urology',
    component:UrologyComponent
   },
   {
    path:'dermatology',
    component:DermatologyComponent
   },
   {path:'addtocart',
    component:AddtocartComponent
  },{
    path:'blogs/blogpost1',
    component:Blogpost1Component
  },
  {
    path:'blogs/blogpost2',
    component:Blogpost2Component
  },
  {
    path:'blogs/blogpost3',
    component:Blogpost3Component
  },{
     path:'blogs/blogpost4',
     component:Blogpost4Component
  },
   {
    path:'doctors',component:DoctorsComponent
   },
   {
    path:'oncology/profile1',
    component:Profile1Component

   },
   {
    path:'oncology/profile2',
    component:Profile2Component

   },
   { path: 'cardiology/profile3', component: Profile3Component, },
   {path: 'cardiology/profile4',component: Profile4Component, },
   { path: 'pulmonology/profile5', component: Profile5Component, },
   {path: 'pulmonology/profile6',component: Profile6Component, },
   { path: 'urology/profile7', component: Profile7Component, },
   {path: 'urology/profile8',component: Profile8Component, },
   { path: 'dermatology/profile9', component: Profile9Component, },
   {path: 'dermatology/profile10',component: Profile10Component, },
   {
    path:'booking-appointment',
    component:BookingAppointmentComponent
   },
   {
    path:'login',
    component:LoginComponent

   },
   {
    path:'register',
    component:RegisterComponent
   },
   {
    path:'payments',
    component:PaymentsComponent
   },
   {
    path:'admin',
    component:AdminComponent
   },
   {
    path:'bloglist',
    component:BloglistComponent
   },
  
  //  {
  //   path:'bookanappointment',
  //   component:BookanappointmentComponent
  //  },
  //  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //  {
  //   path:'login',
  //   component:LoginComponent
  //  },
   
   

   { path: 'medicalstore', component: MedicalstoreComponent,
  children:[
    {path:'',component:AllComponent},{
    path:'oncologymedicines',
    component:OncologymedicinesComponent
   },
   {
    path:'cardiologymedicines',
    component:CardiologymedicinesComponent
   },{
    path:'pulmonologymedicines',
    component:PulmonologymedicinesComponent
   },{
    path:'urologymedicines',
    component:UrologymedicinesComponent
   },{
    path:'dermatologymedicines',
    component:DermatologymedicinesComponent
   }] },
   
   { path: '', redirectTo: '/home', pathMatch: 'full' }
  //  {path:'addtocart',component:AddtocartComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
