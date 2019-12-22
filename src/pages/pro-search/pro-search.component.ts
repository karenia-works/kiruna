import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from '../../components/base-components/paginator/paginator.component';
import { Professor } from '../../models/professor';
import { ApiListResult } from 'src/models/result';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { apiConfig } from '../../environments/backend-config';
import { PaperQueryParam } from 'src/services/data/paper-search.service';

@Component({
  selector: 'app-pro-search',
  templateUrl: './pro-manage.component.html',
  styleUrls: ['./pro-manage.component.styl'],
})
export class ProSearchComponent implements OnInit {
  professors: Professor[] = [];
  keyword;

  startQuery(query: PaperQueryParam) {
    console.log('..');
    this.router.navigate(['/prof/search'], {
      queryParams: {
        offset: 0,
        limit: 20,
        kw: query.kw,
      },
    });
  }

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe({
      next: param => {
        let query: any = {};
        if (param.offset === undefined) query.offset = 0;
        else query.offset = parseInt(param.offset, 10) || 0;
        if (param.limit === undefined) query.limit = 20;
        else query.limit = parseInt(param.limit, 10) || 20;
        if (param.kw !== undefined) query.keyword = param.kw;
        this.keyword = param.kw;
        console.log(param);
        this.httpClient
          .get<ApiListResult<Professor>>(
            environment.endpoint + apiConfig.endpoints.professor.query,
            {
              params: query,
            }
          )
          .subscribe({
            next: result => {
              this.professors = result.data;
            },
          });
      },
    });
  }

  ngOnInit() {
    // this.returnedPros = this.professors.slice(0, 5);
  }
  pageChanged(event: PageChangedEvent): void {
    this.router.navigateByUrl('/prof/search', {
      queryParams: {
        offset: 0,
        limit: 0,
        kw: this.keyword,
      },
    });
  }
}
