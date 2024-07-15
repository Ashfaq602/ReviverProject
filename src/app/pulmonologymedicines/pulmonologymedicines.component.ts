import { Component} from '@angular/core';
import { MedicalserviceService } from '../medicalservice.service';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-pulmonologymedicines',
  templateUrl: './pulmonologymedicines.component.html',
  styleUrl: './pulmonologymedicines.component.css'
})
export class PulmonologymedicinesComponent {
  medicines: any[] = [];
  cartCount: any;
  

  constructor(private medService: MedicalserviceService,private cartService:CartServiceService) {}

  ngOnInit(): void {
    this.medService.getALLMedicines().subscribe((data: any) => {
      console.log(data);
      this.medicines = data;
      // console.log(this.medicines);
    });
}
// addToCart(medicines:any){
//   this.cartService.addToCart(medicines);
// }
addToCart(medicines: any): void {
  const cartProducts: any[] = JSON.parse(localStorage.getItem("cartProducts") || "[]");
  cartProducts.push(medicines);
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  this.cartCount++;
}
}
