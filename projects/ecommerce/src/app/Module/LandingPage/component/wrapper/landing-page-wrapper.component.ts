import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DressTypeCardComponent } from '../child/dress-type-card/dress-type-card.component';
import { PageHeaderComponent } from '../../../../Shared/component/page-header/page-header.component';

@Component({
  selector: 'app-landing-page-wrapper',
  imports: [DressTypeCardComponent, PageHeaderComponent],
  templateUrl: './landing-page-wrapper.component.html',
  styleUrl: './landing-page-wrapper.component.scss',
})
export class LandingPageWrapperComponent {
  items: MenuItem[];
  text: string;
  @ViewChild('ecomPageHeaderViewChild') ecomPageHeaderViewChild: any;

  constructor(private router: Router) {
    this.text = 'test text';
    this.ecomPageHeaderViewChild = {};
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
  }

  showProductListingPage() {
    this.router.navigate(['/product-list']);
  }
}
