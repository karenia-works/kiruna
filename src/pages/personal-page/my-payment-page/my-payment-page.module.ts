import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPaymentPageComponent } from './my-payment-page.component';



@NgModule({
  declarations: [MyPaymentPageComponent],
  imports: [
    CommonModule
  ],
  exports: [MyPaymentPageComponent]
})
export class MyPaymentPageModule { }
