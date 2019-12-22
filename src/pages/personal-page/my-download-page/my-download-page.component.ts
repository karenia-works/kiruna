import { Component, OnInit } from '@angular/core';
import { articles } from '../../../articleAbstractList';
import { PageChangedEvent } from 'src/components/base-components/paginator/paginator.component';
import { AccountService } from 'src/services/account/account.service';
import { HttpClient } from '@angular/common/http';
import { ApiListResult } from 'src/models/result';
import { Paper } from 'src/models/paper';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-download-page',
  templateUrl: './my-download-page.component.html',
  styleUrls: ['./my-download-page.component.styl'],
})
export class MyDownloadPageComponent implements OnInit {
  articles: Paper[];

  constructor(
    private httpclient: HttpClient,
    private userService: AccountService
  ) {}

  ngOnInit() {
    this.httpclient
      .get<ApiListResult<Paper>>(environment.endpoint + '/api/paper/papers', {
        params: {
          tgt: this.userService.userAccount.downloadList.map(i => i.toString()),
        },
      })
      .subscribe({
        next: val => {
          this.articles = val.data;
        },
      });
  }
}
