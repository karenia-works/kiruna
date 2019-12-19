import { Component, OnInit } from '@angular/core';
import {articles} from '../../../articleAbstractList';
import { PageChangedEvent } from '../../../components/base-components/paginator/paginator.component';

@Component({
  selector: 'app-article-manage',
  templateUrl: './article-manage.component.html',
  styleUrls: ['./article-manage.component.styl']
})
export class ArticleManageComponent implements OnInit {
  articles = articles;
  returnedArticles;
  constructor() { }

  ngOnInit() {
    this.returnedArticles = this.articles.slice(0, 5);
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArticles = this.articles.slice(startItem, endItem);
  }
}
