import { Component } from '@angular/core';
import { DoctorsService } from '../doctors.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-booking-appointment',
  templateUrl: './booking-appointment.component.html',
  styleUrl: './booking-appointment.component.css'
})
export class BookingAppointmentComponent {
 
  doctors: any[] = [];
  
  
  

  constructor(private doc:DoctorsService,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.doc.getALLDoctors().subscribe((data: any) => {
      console.log(data);
      this.doctors = data;
     


    });

  }




bookanAppointment() {
  this.snackBar.open('Booking Successful', 'Close', {
    duration: 3000,
    verticalPosition: 'top',
    horizontalPosition: 'center',
    panelClass: ['snackbar-success']
  });
}

}
