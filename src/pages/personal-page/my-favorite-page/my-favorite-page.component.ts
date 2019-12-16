import { Component, OnInit } from '@angular/core';
import { articles } from '../../../articleAbstractList';
import { PageChangedEvent } from 'ngx-bootstrap';

@Component({
  selector: 'app-my-favorite-page',
  templateUrl: './my-favorite-page.component.html',
  styleUrls: ['./my-favorite-page.component.styl']
})
export class MyFavoritePageComponent implements OnInit {
  articles = articles;
  returnedArray;

  constructor() {
  }

  ngOnInit() {
    this.returnedArray = this.articles.slice(0, 5);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.articles.slice(startItem, endItem);
  }
}
