import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'show-more-button',
  imports: [],
  templateUrl: './show-more-button.component.html',
  styleUrl: './show-more-button.component.scss'
})
export class ShowMoreButtonComponent {
  @Output() showLeftSideBar = new EventEmitter();

  showAllOptions() {
    this.showLeftSideBar.emit();
  }
}
