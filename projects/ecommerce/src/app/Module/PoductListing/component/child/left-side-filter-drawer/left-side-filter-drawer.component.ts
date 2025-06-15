import { Component, Output, EventEmitter } from '@angular/core';
import { FilterOptionComponent } from '../filter-option/filter-option.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'left-side-filter-drawer',
  imports: [CommonModule, FilterOptionComponent, ButtonModule],
  templateUrl: './left-side-filter-drawer.component.html',
  styleUrl: './left-side-filter-drawer.component.scss'
})
export class LeftSideFilterDrawerComponent {
  @Output() hideLeftSideDrawer = new EventEmitter();

  closeLeftSideDrawer() {
    this.hideLeftSideDrawer.emit();
  }
}
