import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../../Shared/component/page-header/page-header.component';
import { FilterCardComponent } from '../child/filter-card/filter-card.component';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ProductCardComponent } from '../child/product-card/product-card.component';
import { LeftSideFilterDrawerComponent } from '../child/left-side-filter-drawer/left-side-filter-drawer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-listing-wrapper',
  imports: [CommonModule ,PageHeaderComponent, FilterCardComponent, ProductCardComponent, LeftSideFilterDrawerComponent],
  templateUrl: './product-listing-wrapper.component.html',
  styleUrl: './product-listing-wrapper.component.scss'
})
export class ProductListingWrapperComponent {
  items: MenuItem[];
  value: any;
  showLeftSideDrawer: boolean;

  constructor(private router:Router) {
    this.items = [
      {
        label: 'My Profile',
        icon: 'pi pi-user-plus',
        command: () => {
          //this.update();
        }
      },
      {
        label: 'Orders',
        icon: 'pi pi-truck',
        command: () => {
          //this.delete();
        }
      },
      {
        label: 'Wishlist',
        icon: 'pi pi-heart-fill',
        command: () => {
          //this.delete();
        }
      },
      {
        label: 'Address',
        icon: 'pi pi-tags',
        command: () => {
          //this.delete();
        }
      }
    ];

    this.showLeftSideDrawer = false;
  }

  toggleLeftSideDrawer() {
    this.showLeftSideDrawer = !this.showLeftSideDrawer;
  }

  showAllOptions() {
    this.toggleLeftSideDrawer();
  }

  showProductDetailsPage() {
    this.router.navigate(['/product-details']);
  }
}
