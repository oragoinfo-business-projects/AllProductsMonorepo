import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputGroupModule } from 'primeng/inputgroup';
import { PageHeaderComponent } from '../../../../Shared/component/page-header/page-header.component';
import { ProductRatingComponent } from '../child/product-rating/product-rating.component';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ProductReviewComponent } from '../child/product-review/product-review.component';
import { SizeChartComponent } from '../child/size-chart/size-chart.component';
import { ProductCardComponent } from '../../../PoductListing/component/child/product-card/product-card.component';

@Component({
  selector: 'app-product-details-wrapper',
  imports: [
    CommonModule,
    PageHeaderComponent,
    ProductRatingComponent,
    ProductReviewComponent,
    SizeChartComponent,
    ProductCardComponent,
    CarouselModule,
    RadioButtonModule,
    InputGroupModule
  ],
  templateUrl: './product-details-wrapper.component.html',
  styleUrl: './product-details-wrapper.component.scss',
})
export class ProductDetailsWrapperComponent {
  items: MenuItem[];
  showSizeChart: boolean;
  showProductInfo: boolean;
  pinChecked: boolean;
  products: any[] = [];
  responsiveOptions: any[] | undefined;

  constructor(private router: Router) {
    this.items = [
      {
        label: 'My Profile',
        icon: 'pi pi-user-plus',
        command: () => {
          //this.update();
        },
      },
      {
        label: 'Orders',
        icon: 'pi pi-truck',
        command: () => {
          //this.delete();
        },
      },
      {
        label: 'Wishlist',
        icon: 'pi pi-heart-fill',
        command: () => {
          //this.delete();
        },
      },
      {
        label: 'Address',
        icon: 'pi pi-tags',
        command: () => {
          //this.delete();
        },
      },
    ];
    this.showSizeChart = false;
    this.showProductInfo = false;
    this.pinChecked = false;
  }

  ngOnInit(): void {
    this.products = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1001',
        code: 'f230fh0g3',
        name: 'Dial Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1002',
        code: 'f230fh0g3',
        name: 'Soul Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1003',
        code: 'f230fh0g3',
        name: 'Mole Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1004',
        code: 'f230fh0g3',
        name: 'Goal Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  toggleSizeChart() {
    this.showSizeChart = !this.showSizeChart;
  }

  toggleProductInfo() {
    this.showProductInfo = !this.showProductInfo;
  }

  checkPin() {
    this.pinChecked = !this.pinChecked;
  }
}
