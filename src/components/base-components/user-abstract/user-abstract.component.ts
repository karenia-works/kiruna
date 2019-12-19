import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-abstract',
  templateUrl: './user-abstract.component.html',
  styleUrls: ['./user-abstract.component.styl']
})
export class UserAbstractComponent implements OnInit {
  @Input() name: string;
  @Input() photoURL?: string;
  @Input() from?: string;
  @Input() password?: string;
  @Input() hasBtn: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}

