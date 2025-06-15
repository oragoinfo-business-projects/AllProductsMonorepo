import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'cart-total-calc',
  imports: [CommonModule,FormsModule,RadioButtonModule],
  templateUrl: './cart-total-calc.component.html',
  styleUrl: './cart-total-calc.component.scss'
})
export class CartTotalCalcComponent {

  constructor(private router: Router) {}

  placeOrder() {
    this.router.navigate(['/place-order']);
  }
}
