import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPaymentPageComponent } from './my-payment-page.component';

describe('MyPaymentPageComponent', () => {
  let component: MyPaymentPageComponent;
  let fixture: ComponentFixture<MyPaymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPaymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
