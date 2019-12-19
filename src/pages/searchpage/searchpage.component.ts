import { Component, OnInit } from '@angular/core';

import { articles } from '../../articleAbstractList';
import {
  PaperSearchService as PaperQueryService,
  PaperQueryParam,
  paperQueryParamToWebQuery,
} from 'src/services/data/paper-search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dayjs } from 'dayjs';
import { query } from '@angular/animations';
import { Paper } from 'src/models/paper';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.styl'],
})
export class SearchpageComponent implements OnInit {
  constructor(
    private queryService: PaperQueryService,
    activeRoute: ActivatedRoute,
    private router: Router
  ) {
    activeRoute.queryParams.subscribe({
      next: params => {
        this.queryParams = {
          searchKw: params.kw,
          keyword: params.keywords,
          startTime: params.startTime ? new Dayjs(params.startTime) : undefined,
          endTime: params.endTime ? new Dayjs(params.endTime) : undefined,
          initialTake: params.take === undefined ? 20 : params.take,
          initialSkip: params.skip === undefined ? 0 : params.skip,
        };
        this.loading = true;
        queryService
          .query(this.queryParams)
          .query()
          .subscribe({
            next: val => {
              this.loading = false;
              this.articles = val.data;
              this.totalCount = val.totalCount;
              this.currentCount = params.skip;
            },
          });
      },
    });
  }

  queryParams: PaperQueryParam;

  loading: boolean = true;

  get pagerClass() {
    return { loading: this.loading };
  }

  articles: Paper[] = [];
  // 分页组件配置项
  private itemsPerpage: number;
  // 总条数
  totalCount: number;
  // 当前页码
  currentCount: number = 0;

  startQuery(query: PaperQueryParam) {
    console.log('Searched', query);
    this.router.navigate(['s'], {
      queryParams: paperQueryParamToWebQuery(query),
    });
  }

  // 页码变化，重新获取用户列表数据
  pageChanged(event) {
    // 查看监听到的数据
    console.log('event:', event);
  }

  ngOnInit() {}
}
