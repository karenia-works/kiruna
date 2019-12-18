import { Component, OnInit } from '@angular/core';

import {articles} from '../../articleAbstractList';
import { PageChangedEvent } from '../../components/base-components/paginator/paginator.component';
@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.styl'],
})
export class SearchpageComponent implements OnInit {
  articles = articles;
  // contentArray = new Array(90).fill('');
  returnedArray;

  ngOnInit(): void {
    // this.contentArray = this.contentArray.map((v: string, i: number) => `Content line ${i + 1}`);
    this.returnedArray = this.articles.slice(0, 5);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.articles.slice(startItem, endItem);
  }
}

