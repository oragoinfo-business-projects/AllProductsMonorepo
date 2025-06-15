import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddressSelectorComponent } from '../address-selector/address-selector.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { DeliveryAddressComponent } from "../delivery-address/delivery-address.component";

interface AddressType {
  name: string;
  code: string;
}

@Component({
  selector: 'cart-list-header',
  imports: [CommonModule, FormsModule, AddressSelectorComponent, DropdownModule, DeliveryAddressComponent],
  templateUrl: './cart-list-header.component.html',
  styleUrl: './cart-list-header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CartListHeaderComponent {
  addressTypes: AddressType[];
  selectedAddressType: AddressType;
  isSameAddress: boolean;
  showAddressList: boolean;

  constructor() {
    this.addressTypes = [];
    this.selectedAddressType = {} as AddressType;
    this.isSameAddress = true;
    this.showAddressList = false;
  }

  ngOnInit() {
    this.addressTypes = [
      { name: 'All Products - Same Address', code: 'Same' },
      { name: 'Different Products - Different Address', code: 'Different' },
    ];
    this.selectedAddressType = this.addressTypes[0];
  }

  onAddressTypeChange() {
    this.isSameAddress = this.selectedAddressType.code == 'Same'? true:false;
  }

  showHideAddressListPopup(param: boolean) {
    this.showAddressList = param;
  }
}
