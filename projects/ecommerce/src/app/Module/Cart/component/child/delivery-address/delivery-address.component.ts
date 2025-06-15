import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'delivery-address',
  imports: [CommonModule],
  templateUrl: './delivery-address.component.html',
  styleUrl: './delivery-address.component.scss'
})
export class DeliveryAddressComponent {
  @Output() showAddressPopup:EventEmitter<void> = new EventEmitter<void>();
  isSameAddress: boolean = true;

  onEditClick() {
    this.showAddressPopup.emit();
  }
}
