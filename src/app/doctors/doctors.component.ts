import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent implements OnInit {
  doctors: any[] = [];
  

  constructor(private doc: DoctorsService) {}

  ngOnInit(): void {
    this.doc.getALLDoctors().subscribe((data: any) => {
      console.log(data);
      this.doctors = data;
     


    });

}
}
