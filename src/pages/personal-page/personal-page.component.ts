import { Component, OnInit } from '@angular/core';
import { articles } from '../../articleAbstractList';
import { UserInfo, AccountService } from 'src/services/account/account.service';
import { environment } from 'src/environments/environment';
import { ApiResult, ApiListResult } from 'src/models/result';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from 'src/models/account';
import { Paper } from 'src/models/paper';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.styl'],
})
export class PersonalPageComponent implements OnInit {
  articles: Paper[];
  returnedArray;
  name;
  college;
  downloadNum;
  MoneyLeft;
  user: UserAccount;

  constructor(
    private httpClient: HttpClient,
    private accountService: AccountService
  ) {
    this.user = accountService.userAccount;
    this.httpClient
      .get<ApiListResult<Paper>>(environment.endpoint + '/api/paper/papers', {
        params: {
          tgt: this.accountService.userAccount.favoriteList.map(i =>
            i.toString()
          ),
        },
      })
      .subscribe({
        next: val => {
          this.articles = val.data.slice(0, 3);
        },
      });
  }

  ngOnInit() {}
}

export class PersonalPageInfo {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}
