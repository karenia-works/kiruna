import { Component, OnInit } from '@angular/core';
import {articles} from '../../../articleAbstractList';
import { PageChangedEvent } from '../../../components/base-components/paginator/paginator.component';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PaperSearchService as PaperQueryService,
  PaperQueryParam,
  paperQueryParamToWebQuery,
  webQueryToPaperQueryParam,
} from 'src/services/data/paper-search.service';
import { Paper } from 'src/models/paper';
@Component({
  selector: 'app-article-manage',
  templateUrl: './article-manage.component.html',
  styleUrls: ['./article-manage.component.styl']
})
export class ArticleManageComponent implements OnInit {
  // articles = articles;
  // returnedArticles;
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
          this.searching = true;
          queryService
            .query(this.queryParams)
            .query()
            .subscribe({
              next: val => {
                this.loading = false;
                this.articles = val.data;
                this.returnArticles = this.articles.slice(0, 5);
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
  private itemsPerpage: number = 20;
  // 总条数
  totalCount: number;
  // 当前页码
  currentCount: number = 0;
  returnArticles: Paper[];
  startQuery(query: PaperQueryParam) {
    console.log('Searched', query);
    this.router.navigate(['admin/article'], {
      queryParams: paperQueryParamToWebQuery(query),
    });
  }

  ngOnInit() {

  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnArticles = this.articles.slice(startItem, endItem);
  }
}
