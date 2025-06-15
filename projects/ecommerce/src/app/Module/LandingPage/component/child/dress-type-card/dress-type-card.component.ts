import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dress-type-card',
  imports: [],
  templateUrl: './dress-type-card.component.html',
  styleUrl: './dress-type-card.component.scss'
})
export class DressTypeCardComponent {
  @Output() showProductListingPage = new EventEmitter();

  constructor() {
  }

  onDressTypeSelect() {
    this.showProductListingPage.emit();
  }

}
