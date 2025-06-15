import { Routes } from '@angular/router';
import { LandingPageWrapperComponent } from './Module/LandingPage/component/wrapper/landing-page-wrapper.component';
import { ProductListingWrapperComponent } from './Module/PoductListing/component/wrapper/product-listing-wrapper.component';
import { ProductDetailsWrapperComponent } from './Module/ProductDetails/component/wrapper/product-details-wrapper.component';
import { CartWrapperComponent } from './Module/Cart/component/wrapper/cart-wrapper.component';
import { OrderHistoryWrapperComponent } from './Module/OrderHistory/component/wrapper/order-history-wrapper.component';
import { PlaceOrderWrapperComponent } from './Module/PlaceOrder/component/wrapper/place-order-wrapper.component';

export const routes: Routes = [

  {
    path:'login',
    providers: [],
    children: [
    ]
  },
  {
    path:'',
    providers: [],
    children: [
      {path:'', component: LandingPageWrapperComponent}
    ]
  },
  {
    path:'product-list',
    providers: [],
    children: [
      {path: '', component: ProductListingWrapperComponent}
    ]
  },
  {
    path:'product-details',
    providers: [],
    children: [
      {path: '', component: ProductDetailsWrapperComponent}
    ]
  },
  {
    path:'place-order',
    providers: [],
    children: [
      {path: '', component: PlaceOrderWrapperComponent}
    ]
  },
  {
    path:'cart',
    providers: [],
    children: [
      {path: '', component: CartWrapperComponent}
    ]
  },
  {
    path:'order-history',
    providers: [],
    children: [
      {path: '', component: OrderHistoryWrapperComponent}
    ]
  },
];
