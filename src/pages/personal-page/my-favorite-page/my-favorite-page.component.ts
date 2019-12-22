import { Component, OnInit } from '@angular/core';
import { articles } from '../../../articleAbstractList';
import { PageChangedEvent } from 'src/components/base-components/paginator/paginator.component';
import { PaperSearchService } from 'src/services/data/paper-search.service'

@Component({
  selector: 'app-my-favorite-page',
  templateUrl: './my-favorite-page.component.html',
  styleUrls: ['./my-favorite-page.component.styl'],
})
export class MyFavoritePageComponent implements OnInit {
  articles = articles;
  returnedArray;

  constructor(private queryService: PaperSearchService) { }

  ngOnInit() {
    this.queryService
      .query({})
      .query()
      .subscribe({
        next: val => {
          this.returnedArray = val.data;
        },
      });
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.articles.slice(startItem, endItem);
  }
}
