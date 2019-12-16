import { Component, OnInit } from '@angular/core';
import { articles } from '../../articleAbstractList';
import { PageChangedEvent } from 'ngx-bootstrap';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.styl']
})
export class PersonalPageComponent implements OnInit {
  articles = articles;
  returnedArray;

  constructor() {
    this.returnedArray = this.articles.slice(0, 3);
  }

  ngOnInit() {
  }

}

export class PersonalPageInfo {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}
