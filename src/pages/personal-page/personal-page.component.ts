import { Component, OnInit } from '@angular/core';
import { articles } from '../../articleAbstractList';
import { UserInfo } from 'src/services/account/account.service';
import { environment } from 'src/environments/environment';
import { ApiResult } from 'src/models/result';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from 'src/models/account';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.styl'],
})
export class PersonalPageComponent implements OnInit {
  articles = articles;
  returnedArray;
  name;
  college;
  downloadNum;
  MoneyLeft;

  user?: UserAccount

  constructor(private httpClient: HttpClient) {

    this.httpClient.get<UserAccount>(environment.endpoint + "/api/user/me").subscribe({
      next: value => {
        this.user = value
      }
    })
    this.returnedArray = this.articles.slice(0, 3);
    this.name = 'Dio';
    this.college = '北京航空航天大学';
    this.downloadNum = '12';
    this.MoneyLeft = '14.33';
  }

  ngOnInit() {
  }
}

export class PersonalPageInfo {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}
