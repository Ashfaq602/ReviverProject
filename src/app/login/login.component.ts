import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientsService } from '../patients.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

  export class LoginComponent  implements OnInit{
 
    email: any='';
    password: any='';
    patients: any;
    
  
    constructor(private router:Router,private service:PatientsService,private authService:AuthService,private snackBar: MatSnackBar) {
     }
    ngOnInit(): void {
      this.service. getALLPatients().subscribe((data:any)=>{
        this.patients=data
      })
    }
    loginValidate(form:any){ 
      if(form.email=="admin@gmail.com" && form.password=="admin"){
        this.openSnackBar('Login successful', 'Close');
        // alert("login successful");
        this.authService.login('admin');

        this.router.navigate(['/admin']) ;
        return;
      }else{
      for(let pat of this.patients){
      if(pat.emailId==form.email && pat.password==form.password){
        // alert("login successful");
        this.openSnackBar('Login successful', 'Close');
        this.authService.login('patients');
        this.router.navigate(['/booking-appointment'])
        console.log(pat.email);
        console.log(pat.password);
       
        return;
      }
    }
    }
    // alert("login failed");
    this.openSnackBar('Login failed', 'Close');
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Duration in milliseconds
    });
  }
  }