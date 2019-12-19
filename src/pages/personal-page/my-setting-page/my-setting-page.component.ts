import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-setting-page',
  templateUrl: './my-setting-page.component.html',
  styleUrls: ['./my-setting-page.component.styl'],
})
export class MySettingPageComponent implements OnInit {
  name;
  changedName;

  constructor() {}

  ngOnInit() {
    this.name = 'Dio';
    this.changedName = '';
  }

  onClickMe() {
    if (this.changedName != '') {
      alert('确认将你的用户名修改为：' + this.changedName);
      this.name = this.changedName;
    }
  }
}
