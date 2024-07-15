import { Component, OnInit } from '@angular/core';
import { MedicalserviceService } from '../medicalservice.service';

@Component({
  selector: 'app-medicalstore',
  templateUrl: './medicalstore.component.html',
  styleUrls: ['./medicalstore.component.css']
})
export class MedicalstoreComponent implements OnInit {
  medicines: any[] = [];
  cartCount: any;
  //cartItems: any[] = [];

  constructor(private medService: MedicalserviceService) {}

  ngOnInit(): void {
    this.medService.getALLMedicines().subscribe((data: any) => {
      console.log(data);
      this.medicines = data;
      // console.log(this.medicines);
    });
  }
//  addToCart(medicines:any):any{
//    this.medService.addToCart(medicines);
//   }
addToCart(medicines:any):void{
  const cartProducts : any[] = JSON.parse(localStorage.getItem("cartProducts") || "[]");
  cartProducts.push(medicines);
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  this.cartCount++;

}
}
