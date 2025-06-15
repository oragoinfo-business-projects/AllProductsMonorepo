import { CommonModule } from '@angular/common';
import { Component, EventEmitter, ViewEncapsulation, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'login-wrapper',
  imports: [CommonModule, ButtonModule],
  templateUrl: './login-wrapper.component.html',
  styleUrl: './login-wrapper.component.scss'
})
export class LoginWrapperComponent {
  value: string | undefined;
  showGetOTP: boolean;
  isExistingUser: boolean;
  isOtpTimerExpired: boolean;
  @Output() close:EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.showGetOTP = false;
    this.isExistingUser = false;
    this.isOtpTimerExpired = false;
  }

  getOTP() {
    this.showGetOTP = true;
  }

  showLoginForm() {
    this.isExistingUser = true;
    this.showGetOTP = false;
  }

  showSingupForm() {
    this.isExistingUser = false;
    this.showGetOTP = false;
  }

  login() {
  }

  closeLoginPopup() {
    this.close.emit();
  }
}
