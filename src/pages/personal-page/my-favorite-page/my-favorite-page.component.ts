import { Component, OnInit } from '@angular/core';
import { articles } from '../../../articleAbstractList';
import { PageChangedEvent } from 'src/components/base-components/paginator/paginator.component';
import { PaperSearchService } from 'src/services/data/paper-search.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AccountService } from 'src/services/account/account.service';
import { ApiListResult } from 'src/models/result';
import { Paper } from 'src/models/paper';

@Component({
  selector: 'app-my-favorite-page',
  templateUrl: './my-favorite-page.component.html',
  styleUrls: ['./my-favorite-page.component.styl'],
})
export class MyFavoritePageComponent implements OnInit {
  articles = articles;
  returnedArray;

  constructor(
    private httpclient: HttpClient,
    private userService: AccountService
  ) {}

  ngOnInit() {
    this.httpclient
      .get<ApiListResult<Paper>>(environment.endpoint + '/api/paper/papers', {
        params: {
          tgt: this.userService.userAccount.favoriteList.map(i => i.toString()),
        },
      })
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
