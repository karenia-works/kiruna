import { Component, OnInit } from '@angular/core';
import { professors } from '../../../proAbstractList';
import { PageChangedEvent } from '../../../components/base-components/paginator/paginator.component';
import { Professor } from '../../../models/professor';
import { ApiListResult } from 'src/models/result';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { Paper } from '../../../models/paper';
import { apiConfig } from '../../../environments/backend-config';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-pro-manage',
  templateUrl: './pro-manage.component.html',
  styleUrls: ['./pro-manage.component.styl'],
})
export class ProManageComponent implements OnInit {
  professors: Professor[] = [];
  returnedPros: Professor[];
  decription;
  id;
  offset;
  limit;
  keyword;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe({
      next: param => {
        let query: any = {};
        if (param.offset === undefined) query.offset = 0;
        else query.offset = parseInt(param.offset);
        if (param.limit === undefined) query.limit = 20;
        else query.limit = parseInt(param.limit);
        if (param.kw !== undefined) query.keyword = param.kw;

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
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedPros = this.professors.slice(startItem, endItem);
  }
}
