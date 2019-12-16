import { Component, OnInit } from '@angular/core';
import { articles } from '../../../articleAbstractList';
import { PageChangedEvent } from 'ngx-bootstrap';

@Component({
  selector: 'app-my-download-page',
  templateUrl: './my-download-page.component.html',
  styleUrls: ['./my-download-page.component.styl']
})
export class MyDownloadPageComponent implements OnInit {
  articles = articles;
  returnedArray;

  constructor() { }

  ngOnInit() {
    this.returnedArray = this.articles.slice(0, 5);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.articles.slice(startItem, endItem);
  }
}
