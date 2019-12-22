import { Component, OnInit } from '@angular/core';

import { articles } from '../../articleAbstractList';
import {
  PaperSearchService as PaperQueryService,
  PaperQueryParam,
  paperQueryParamToWebQuery,
  webQueryToPaperQueryParam,
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
        this.articles = [];
        this.queryParams = webQueryToPaperQueryParam(params);
        if (
          this.queryParams.author ||
          this.queryParams.keyword ||
          this.queryParams.kw
        ) {
          this.loading = true;
          queryService
            .query(this.queryParams)
            .query()
            .subscribe({
              next: val => {
                this.searching = true;
                this.loading = false;
                this.articles = val.data;
                this.totalCount = val.totalCount;
                this.currentCount = parseInt(params.skip, 10);
              },
            });
        } else {
          this.queryParams = { take: 20, skip: 0 };
          this.searching = false;
        }
      },
    });
  }

  queryParams: PaperQueryParam;

  searching: boolean = false;
  loading: boolean = true;

  get pagerClass() {
    return { loading: this.loading, pager: true };
  }

  articles: Paper[] = [];
  // 分页组件配置项
  itemsPerPage: number = 20;
  // 总条数
  totalCount: number;
  // 当前页码
  currentCount: number = 0;
  returnArticles: Paper[];

  startQuery(query: PaperQueryParam) {
    console.log('Searched', query);
    this.router.navigate(['s'], {
      queryParams: paperQueryParamToWebQuery(query),
    });
  }

  // 页码变化，重新获取用户列表数据
  pageChanged(event) {
    // 查看监听到的数据
    const startItem = (event.page - 1) * this.itemsPerPage;
    this.queryParams.skip = startItem;
    this.router.navigate(['s'], {
      queryParams: paperQueryParamToWebQuery(this.queryParams),
    });
  }

  ngOnInit() { }
}
