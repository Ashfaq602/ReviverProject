import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  // private items:any[]=[];
  // private cartSubject = new BehaviorSubject<any[]>([]);
  private cartCountSubject = new Subject<number>();
  cartCount$ = this.cartCountSubject.asObservable();
  items: any;

 

  constructor() {}
  addToCart(item: any): void {
    this.items.push(item);
    this.updateCartCount(this.items.length);
  }

  updateCartCount(count: number): void {
    this.cartCountSubject.next(count);
  }
}
//     this.initCart();
//    }
//    private initCart() {
//     const storedItems = localStorage.getItem('cartItems');
//     if (storedItems) {
//       this.items = JSON.parse(storedItems);
//       this.cartSubject.next(this.items);
//     }
//   }
//   getALLMedicines(): Observable<any[]> {
//     return this.http.get<any[]>('http://localhost:8087/getALLMedicines').pipe(
//       tap(data => console.log('Fetched medicines:', data)),
//       catchError(error => {
//         console.error('Error fetching medicines:', error);
//         return throwError(error); // Rethrow the error to be caught by the component
//       })
//     );
//   }

//   addToCart(item:any){
//     this.items.push(item);
//     this.cartSubject.next(this.items);
//     this.updateLocalStorage();
//   }
//   private updateLocalStorage() {
//     localStorage.setItem('cartItems', JSON.stringify(this.items));
//   }
//   getItems(){
//     return this.cartSubject.asObservable();;
//   }
//   delete(item:any){
//     this.items=this.items.filter((i:any)=>i.id !== item.id);
//     this.cartSubject.next(this.items);
//     this.updateLocalStorage();

//   }
//   incrementQuantity(id:number){
//     let item=this.items.find((i:any)=>i.id==id);
//     if(item){
//       item.quantity++;
//       this.updateLocalStorage();
//     }
    
//   }
 
  
//   decrementQuantity(id:number){
//     let item=this.items.find((i:any)=>i.id==id);
//     if(item){
//       item.quantity--;
//       this.updateLocalStorage();
//     }
    

//   }
//   getTotal() {
//     return this.items.length;
//     }

  
// 
