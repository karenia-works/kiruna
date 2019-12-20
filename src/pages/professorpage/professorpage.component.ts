import { Component, OnInit } from '@angular/core';
import { articles } from '../../articleAbstractList';
import { connections } from '../../connectionList';
import { tags } from '../../tagList';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { apiConfig } from 'src/environments/backend-config';
import { Professor } from 'src/models/professor';
import { ApiResult } from 'src/models/result';

@Component({
  selector: 'app-professorpage',
  templateUrl: './professorpage.component.html',
  styleUrls: ['./professorpage.component.styl'],
})
export class ProfessorPageComponent implements OnInit {
  articles = articles;
  returnedArticlesArray;
  photo;
  name;
  unit;
  description;
  personalSite;
  weiboName;
  weiboSite;
  tags = tags;
  returnedTagsArray;
  articleNum;
  quotedNum;
  downloadedNum;
  quotes = connections;
  quoteds = connections;
  returnedQuotesArray;
  returnedQuotedsArray;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  professor: Professor;

  ngOnInit() {
    this.returnedArticlesArray = this.articles.slice(0, 3);
    this.photo =
      'https://pic3.zhimg.com/a82b51c4284beda5b29d645fa4f91c97_xl.jpg';
    this.name = '闫志全';
    this.unit = '北京航空航天大学';
    this.description =
      '化学博士。现在在主攻社会行为学和生物学，以及化学物质在其中的作用。';
    this.personalSite = 'http://yan-zhiquan.com';
    this.weiboName = '@你家猫一米八';
    this.weiboSite = 'https://weibo.com/';
    this.articleNum = '30';
    this.quotedNum = '115';
    this.downloadedNum = '65536';
    this.returnedTagsArray = this.tags.slice(0, 3);
    this.returnedQuotesArray = this.quotes.slice(0, 2);
    this.returnedQuotedsArray = this.quoteds.slice(0, 2);

    this.route.params.subscribe({
      next: param => {
        let id = param.id;
        this.httpClient
          .get<ApiResult<Professor>>(
            environment.endpoint +
              apiConfig.endpoints.professor.single.replace('{id}', id)
          )
          .subscribe({
            next: result => {
              this.professor = result.data;
            },
          });
      },
    });
  }
}
