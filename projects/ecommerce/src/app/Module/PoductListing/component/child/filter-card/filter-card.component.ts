import { Component, EventEmitter, Output } from '@angular/core';
import { FilterOptionComponent } from '../filter-option/filter-option.component';
import { ShowMoreButtonComponent } from '../show-more-button/show-more-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'filter-card',
  imports: [CommonModule, FilterOptionComponent, ShowMoreButtonComponent],
  templateUrl: './filter-card.component.html',
  styleUrl: './filter-card.component.scss'
})
export class FilterCardComponent {
  @Output() showLeftSideBar = new EventEmitter();

  showAllOptions() {
    this.showLeftSideBar.emit();
  }
}
