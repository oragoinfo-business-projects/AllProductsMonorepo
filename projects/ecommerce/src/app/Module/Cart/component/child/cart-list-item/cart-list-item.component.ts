import { Component } from '@angular/core';
import { DeliveryAddressComponent } from "../delivery-address/delivery-address.component";
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cart-list-item',
  imports: [CommonModule,FormsModule,DeliveryAddressComponent,DropdownModule],
  templateUrl: './cart-list-item.component.html',
  styleUrl: './cart-list-item.component.scss'
})
export class CartListItemComponent {
  addressType: 'same' | 'different' = 'same';
  showAddressList: boolean = false;
  sizeList!: any[];
  selectedSize!: string;
  isSizeListOpen: number = 0;

  ngOnInit() {
    this.sizeList = [
      {name: 'XXL'},
      {name: 'XL'},
      {name: 'L'},
      {name: 'M'},
      {name: 'S'}
    ];
  }

  showHideAddressListPopup(param: boolean) {
    this.showAddressList = param;
  }

  onSizeChange() {

  }

  sizeListToggle() {
    if(this.isSizeListOpen == 0 || this.isSizeListOpen == 2)
      this.isSizeListOpen = 1;
    else
      this.isSizeListOpen = 2;
  }
}
