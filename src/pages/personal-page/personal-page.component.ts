import { Component, OnInit } from '@angular/core';
import { articles } from '../../articleAbstractList';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.styl'],
})
export class PersonalPageComponent implements OnInit {
  articles = articles;
  returnedArray;
  name;
  college;
  downloadNum;
  MoneyLeft;

  constructor() {}

  ngOnInit() {
    this.returnedArray = this.articles.slice(0, 3);
    this.name = 'Dio';
    this.college = '北京航空航天大学';
    this.downloadNum = '12';
    this.MoneyLeft = '14.33';
  }
}

export class PersonalPageInfo {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}
