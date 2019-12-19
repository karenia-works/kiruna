import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPaymentPageComponent } from './my-payment-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyPaymentPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [MyPaymentPageComponent],
})
export class MyPaymentPageModule {}
