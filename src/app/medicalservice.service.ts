// import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicalserviceService {
  
  

  constructor(private client:HttpClient) {
   }

  // constructor(private client:HttpClient,@Inject(PLATFORM_ID) private platformId: Object) {
  //   // this.isUserLoggedIn=false;
   

  //   if (isPlatformBrowser(this.platformId)) {
  //     this.items = JSON.parse(localStorage.getItem('cartItems') || '[]');
  //   } else {
  //     this.items = []; // Initialize items to an empty array in non-browser environments
  //   }
  //  }
  //  addToCart(product: any) {
  //   this.items.push({ ...product, quantity: 1 });
  //   if (isPlatformBrowser(this.platformId)) {
  //     localStorage.setItem('cartItems', JSON.stringify(this.items));
  //   }
  
  
    getALLMedicines():any{
      return this.client.get('http://localhost:8087/getALLMedicines');
    }
    getMedicineById(id:any):any{
      return this.client.get('http://localhost:8087/getMedicineById/${id}');
    }
   

  //   incrementQuantity (id: number) {
  //     let item = this.items.find((i:any) => i.id === id);
  //     if (item){
  //       item.quantity++;
  //     }
  //     localStorage.setItem( 'cartItems', JSON.stringify(this.items));
  //   } 
  
  //   getMedicines(){
  //     return this.items;
  //   }
    
  //   delete(item: any) {
  //     this.items = this.items.filter((i:any) => i.id !== item.id);
  //     }
    
  //   decrementQuantity (id: number) {
  //     let item = this.items.find((i:any) => i.id === id);
  //     if (item){
  //       item.quantity--;
  //     }
  //     localStorage.setItem( 'cartItems', JSON.stringify(this.items));
  //   } 
  //   getTotal() {
  //     return this.items.reduce((acc:any, item:any)=> {
  //       return acc + item. price * item.quantity;
  //     } , 0);
  //     }
  
}
  



