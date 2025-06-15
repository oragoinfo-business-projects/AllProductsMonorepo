import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'coupon-code-card',
  imports: [CommonModule,FormsModule,RadioButtonModule],
  templateUrl: './coupon-code-card.component.html',
  styleUrl: './coupon-code-card.component.scss',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CouponCodeCardComponent {
  @Input() couponId : number = 0;
  couponCode!: string;
}
