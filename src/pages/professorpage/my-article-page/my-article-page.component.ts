import { Component, OnInit } from '@angular/core';
import {articles} from '../../../articleAbstractList';
import {PageChangedEvent} from '../../../components/base-components/paginator/paginator.component';

@Component({
  selector: 'app-my-article-page',
  templateUrl: './my-article-page.component.html',
  styleUrls: ['./my-article-page.component.styl'],
})
export class MyArticlePageComponent implements OnInit {
  articles = articles;
  returnedArray;
  articleNum;

  constructor() {}

  ngOnInit() {
    this.returnedArray = this.articles.slice(0, 5);
    this.articleNum = '30';
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.articles.slice(startItem, endItem);
  }
}
