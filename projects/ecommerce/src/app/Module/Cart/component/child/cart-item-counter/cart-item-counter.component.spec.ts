import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemCounterComponent } from './cart-item-counter.component';

describe('CartItemCounterComponent', () => {
  let component: CartItemCounterComponent;
  let fixture: ComponentFixture<CartItemCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartItemCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartItemCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
