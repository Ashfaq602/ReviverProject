import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
  constructor() { }

  ngOnInit(): void {
  }

  submitPaymentForm() {
    
    console.log("Payment form submitted");
    
  }

}
