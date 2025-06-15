import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'address-selector',
  imports: [CommonModule,FormsModule,ButtonModule, RadioButtonModule],
  templateUrl: './address-selector.component.html',
  styleUrl: './address-selector.component.scss'
})
export class AddressSelectorComponent {
  @Output() close:EventEmitter<void> = new EventEmitter<void>();
  ingredient!: string;

  constructor() {
  }

  closeAddressSelectorPopup() {
    this.close.emit();
  }
}
