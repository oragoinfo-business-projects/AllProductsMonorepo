import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../../../../Shared/component/page-header/page-header.component';
import { CartTotalCalcComponent } from '../../../Cart/component/child/cart-total-calc/cart-total-calc.component';

type AccordionStatus = {
  isOrderSummaryAccordionExpanded: number;
  isPaymentOptionsAccordionExpanded: number;
  isOrderSuccessfulAccordionExpanded: number;
};

type UserAction = {
  orderSummaryCompleted: boolean;
  paymentOptionsCompleted: boolean;
};

@Component({
  selector: 'app-place-order-wrapper',
  imports: [
    CommonModule,
    FormsModule,
    PageHeaderComponent,
    CartTotalCalcComponent,
  ],
  templateUrl: './place-order-wrapper.component.html',
  styleUrl: './place-order-wrapper.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PlaceOrderWrapperComponent {
  accordionList: AccordionStatus = {
    isOrderSummaryAccordionExpanded: 0, //1-shrink, 0/2-expand
    isPaymentOptionsAccordionExpanded: 1,
    isOrderSuccessfulAccordionExpanded: 1,
  };
  userAction: UserAction = {
    orderSummaryCompleted: false,
    paymentOptionsCompleted: false,
  };

  manageAccrodion(source: string) {
    switch (source) {
      case 'OS':
        if (
          this.accordionList.isOrderSummaryAccordionExpanded === 0 ||
          this.accordionList.isOrderSummaryAccordionExpanded === 2
        ) {
          this.accordionList.isOrderSummaryAccordionExpanded = 1;
        } else {
          this.accordionList.isOrderSummaryAccordionExpanded = 2;
        }
        // console.log(
        //   'Accordion value = ' +
        //     this.accordionList.isOrderSummaryAccordionExpanded
        // );
        break;
      case 'PO':
        if (
          this.accordionList.isPaymentOptionsAccordionExpanded === 0 ||
          this.accordionList.isPaymentOptionsAccordionExpanded === 2
        ) {
          this.accordionList.isPaymentOptionsAccordionExpanded = 1;
        } else {
          this.accordionList.isPaymentOptionsAccordionExpanded = 2;
        }
        break;
      case 'OSP':
        if (
          this.accordionList.isOrderSuccessfulAccordionExpanded === 0 ||
          this.accordionList.isOrderSuccessfulAccordionExpanded === 2
        ) {
          this.accordionList.isOrderSuccessfulAccordionExpanded = 1;
        } else {
          this.accordionList.isOrderSuccessfulAccordionExpanded = 2;
        }
        break;
    }
  }

  manageUserAction(source: string) {
    switch (source) {
      case 'OS':
        this.userAction.orderSummaryCompleted = true;
        this.accordionList.isOrderSummaryAccordionExpanded = 1;
        alert
        break;
      case 'PO':
        this.userAction.paymentOptionsCompleted = true;
        this.accordionList.isPaymentOptionsAccordionExpanded = 1;
        break;
    }
  }
}
