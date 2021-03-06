import { OrderSummaryComponent } from './order-summary.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PromotionsModule } from '../../../checkout/components/promotions/promotions.module';
import { I18nTestingModule } from '@spartacus/core';

describe('OrderSummary', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PromotionsModule, I18nTestingModule],
      declarations: [OrderSummaryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
