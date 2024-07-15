import { Component } from '@angular/core';
import { MedicalserviceService } from '../medicalservice.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {
  medicines: any[] = [];

  constructor(private medService: MedicalserviceService) {}

  ngOnInit(): void {
    this.medService.getALLMedicines().subscribe((data: any) => {
      console.log(data);
      this.medicines = data;
      // console.log(this.medicines);
    });
  }
}
