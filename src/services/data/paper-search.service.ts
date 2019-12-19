import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Paper } from 'src/models/paper';
import { Subject } from 'rxjs';
import { apiConfig } from 'src/environments/backend-config';
import { environment } from 'src/environments/environment';
import { ApiListResult } from 'src/models/result';
import { Dayjs } from 'dayjs';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PaperSearchService {
  constructor(private httpClient: HttpClient) {}

  query(query: PaperQueryParam): PaperQuery {
    if (query.initialSkip === undefined) {
      query.initialSkip = 0;
    }
    if (query.initialTake === undefined) {
      query.initialTake = 20;
    }
    return new PaperQuery(query, this.httpClient);
  }
}

export class PaperQuery extends Subject<ApiListResult<Paper>> {
  /**
   *
   */
  constructor(param: PaperQueryParam, private httpClient: HttpClient) {
    super();
    this.param = param;
  }
  param: PaperQueryParam;

  query() {
    this.httpClient
      .get<ApiListResult<Paper>>(
        environment.endpoint + apiConfig.endpoints.paper.query,
        { params: this.transform(this.param) }
      )
      .subscribe({
        next: result => {
          this.next(result);
        },
      });
    return this;
  }

  transform(input: PaperQueryParam): { [param: string]: string | string[] } {
    let params: { [param: string]: string | string[] } = {};
    if (input.searchKw) params.summary = input.searchKw;
    if (input.keyword) params.keyword = input.keyword;
    if (input.author) params.author = input.author;
    if (input.startTime !== undefined)
      params.startTime = input.startTime.toISOString();
    if (input.endTime !== undefined)
      params.endTime = input.endTime.toISOString();
    if (input.initialSkip !== undefined)
      params.skip = input.initialSkip.toString();
    else params.skip = '0';
    if (input.initialTake !== undefined)
      params.take = input.initialTake.toString();
    else params.take = '20';
    return params;
  }
}

export interface PaperQueryParam {
  searchKw?: string;
  keyword?: string[];
  author?: string[];
  startTime?: Dayjs;
  endTime?: Dayjs;
  initialSkip?: number;
  initialTake?: number;
}
export function paperQueryParamToWebQuery(q: PaperQueryParam): Params {
  return {
    kw: q.searchKw,
    keywords: q.keyword,
    startTime: q.startTime ? q.startTime.toISOString() : undefined,
    endTime: q.endTime ? q.endTime.toISOString() : undefined,
    take: q.initialTake.toString(),
    skip: q.initialSkip.toString(),
  };
}
export function webQueryToPaperQueryParam(params: Params): PaperQueryParam {
  return {
    searchKw: params.kw,
    keyword: params.keywords,
    startTime: params.startTime ? new Dayjs(params.startTime) : undefined,
    endTime: params.endTime ? new Dayjs(params.endTime) : undefined,
    initialTake: params.take === undefined ? 20 : params.take,
    initialSkip: params.skip === undefined ? 0 : params.skip,
  };
}
