import { Component, OnInit } from '@angular/core';
// import { MedicalserviceService } from '../medicalservice.service';
// import { Router } from '@angular/router';
import { CartServiceService } from '../cart-service.service';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  medicines:any[]=[];
  total: number = 0;
  cartCount:number=0;

 
  


constructor(public cartService: CartServiceService,private router: Router) {}

ngOnInit(): void {
  // this.cartService.getALLMedicines().subscribe(
  //   (data:any[]) => { 
  //     console.log('Recieved medicines:',data);
  //     this.medicines = data;
  //   },
  //   (error) => {
  //     console.log('Error fetching medicines:', error);
  //   }
  // );
  this.loadCartProducts();
  this.calculateTotal();

}
loadCartProducts(): void {
  const receivedProducts: string | null = localStorage.getItem("cartProducts");

  if (receivedProducts !== null) {
    this.medicines = JSON.parse(receivedProducts);
    this.cartService.updateCartCount(this.medicines.length);
  }
}
calculateTotal(): void {
  this.total = this.medicines.reduce((total, medicines) => total + medicines.price, 0);
}



// eleteFromCart(item: any) {
  
//   this.cartService.delete(item);
// /
removeFromCart(index: number): void {
  this.medicines.splice(index, 1); 
  localStorage.setItem("cartProducts", JSON.stringify(this.medicines));
  this.calculateTotal(); 
  this.cartCount--;
  this.cartService.updateCartCount(this.medicines.length);
  }


}
