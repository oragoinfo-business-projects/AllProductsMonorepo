import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-rating',
  imports: [CommonModule],
  templateUrl: './product-rating.component.html',
  styleUrl: './product-rating.component.scss'
})
export class ProductRatingComponent {
  @Input() size: string;

  constructor() {
    this.size = 'lg';
  }
}
