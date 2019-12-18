import { Component, OnInit } from '@angular/core';
import {professors} from '../../proAbstractList';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.styl']
})
export class AdminPageComponent implements OnInit {
  name;
  lined_name;
  message;
  constructor() { }
  professors = professors;
  ngOnInit() {
    this.name = 'Admin';
    this.message = '你对力量一无所知！！！';
    this.lined_name = '阿多米尼斯多雷特';
  }

}
