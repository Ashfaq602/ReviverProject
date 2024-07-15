import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from '../patients.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',

  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: any;
  age:any;
  gender:any;
  emailId: String='';
  password: any;
  conformpassword:any;
  registrationForm: FormGroup;
  
  constructor(private service: PatientsService, private router: Router,private fb:FormBuilder) {
    this.registrationForm = this.fb.group({
      
      password: ['', [Validators.required, strongPasswordValidator()]],
      confirmpassword: ['', Validators.required] // Add confirmpassword field
    });
  }

  ngOnInit(): void {}

  registration() {
    // Perform validation
    if (!this.name ||!this.age||!this.gender|| !this.emailId || !this.password) {
      alert("Please fill in all the fields.");
      return; // Exit registration process if any field is empty
    }
    if (!this.emailId.includes('@')) {
      alert("Invalid email address. @ symbol is missing.");
      return; 
    }


    const patientData = {
      name: this.name,
      age:this.age,
      gender:this.gender,
      emailId: this.emailId,
      password: this.password
    };

    // Register the patient
    this.service.register(patientData).subscribe(
      (data: any) => {
        console.log("Registration response:", data); // Log the registration response
        alert("Registration successful."); // Display success message
        this.router.navigate(['/login']); // Navigate to login page
        console.log(data);
      },
      (error: any) => {
        console.error("Error occurred during registration:", error); // Log any errors
        alert("An error occurred during registration. Please try again."); // Display error message
      }
    );
    
  }
  passwordsMatch() {
    return this.registrationForm.get('password')!.value === this.registrationForm.get('confirmpassword')!.value;
  }
  
  
}

function strongPasswordValidator() {
  return (control: { value: any; }) => {
    const password = control.value;
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordPattern.test(password)) {
      return { weakPassword: true };
    }
    return null;
  };
}
