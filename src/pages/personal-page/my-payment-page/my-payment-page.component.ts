import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-payment-page',
  templateUrl: './my-payment-page.component.html',
  styleUrls: ['./my-payment-page.component.styl'],
})
export class MyPaymentPageComponent implements OnInit {
  payNum;

  constructor() {}

  ngOnInit() {
    this.payNum = 0;
  }

}
