import { Component } from '@angular/core';
import { CartListHeaderComponent } from '../child/cart-list-header/cart-list-header.component';
import { PageHeaderComponent } from '../../../../Shared/component/page-header/page-header.component';
import { CommonModule } from '@angular/common';
import { CartListItemComponent } from '../child/cart-list-item/cart-list-item.component';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { CartTotalCalcComponent } from '../child/cart-total-calc/cart-total-calc.component';
import { CouponCodeCardComponent } from '../child/coupon-code-card/coupon-code-card.component';

@Component({
  selector: 'app-cart-wrapper',
  imports: [CommonModule,FormsModule,PageHeaderComponent,CartListHeaderComponent,CartListItemComponent,
    InputTextModule,CartTotalCalcComponent,CouponCodeCardComponent],
  templateUrl: './cart-wrapper.component.html',
  styleUrl: './cart-wrapper.component.scss'
})
export class CartWrapperComponent {
  value!: string;
  couponCode!: string;
}
