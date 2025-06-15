import { Component } from '@angular/core';
import { ProductRatingComponent } from '../product-rating/product-rating.component';

@Component({
  selector: 'product-review',
  imports: [ProductRatingComponent],
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.scss'
})
export class ProductReviewComponent {

}
