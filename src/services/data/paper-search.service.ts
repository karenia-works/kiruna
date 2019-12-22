import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Paper } from 'src/models/paper';
import { Subject } from 'rxjs';
import { apiConfig } from 'src/environments/backend-config';
import { environment } from 'src/environments/environment';
import { ApiListResult } from 'src/models/result';
import dayjs, { Dayjs } from 'dayjs';
import { Params, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PaperSearchService {
  constructor(private httpClient: HttpClient) { }

  query(query: PaperQueryParam): PaperQuery {
    if (query.skip === undefined) {
      query.skip = 0;
    }
    if (query.take === undefined) {
      query.take = 20;
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
    if (input.kw !== undefined && input.kw !== "") params.summary = input.kw;
    if (input.keyword !== undefined && input.keyword !== []) params.keyword = input.keyword;
    if (input.author !== undefined && input.author !== []) params.author = input.author;
    if (input.startTime !== undefined)
      params.startTime = input.startTime.toISOString();
    if (input.endTime !== undefined)
      params.endTime = input.endTime.toISOString();
    if (input.skip !== undefined) params.skip = input.skip.toString();
    else params.skip = '0';
    if (input.take !== undefined) params.take = input.take.toString();
    else params.take = '20';
    return params;
  }
}

export interface PaperQueryParam {
  kw?: string;
  keyword?: string[];
  author?: string[];
  startTime?: Dayjs;
  endTime?: Dayjs;
  skip?: number;
  take?: number;
}
export function paperQueryParamToWebQuery(q: PaperQueryParam): Params {
  if (q.skip === undefined) q.skip = 0;
  if (q.take === undefined) q.take = 20;
  return {
    kw: q.kw,
    author: q.author,
    keyword: q.keyword,
    startTime: q.startTime ? q.startTime.toISOString() : undefined,
    endTime: q.endTime ? q.endTime.toISOString() : undefined,
    take: q.take.toString(),
    skip: q.skip.toString(),
  };
}
export function webQueryToPaperQueryParam(params: Params): PaperQueryParam {
  let re: PaperQueryParam = {
    kw: params.kw,
    startTime:
      params.startTime === undefined ? undefined : dayjs(params.startTime),
    endTime: params.endTime === undefined ? undefined : dayjs(params.endTime),
    take: params.take === undefined ? 20 : params.take,
    skip: params.skip === undefined ? 0 : params.skip,
  };

  let author = params.author;
  if (author !== undefined && typeof author === 'string') re.author = [author];
  else re.author = author as string[];

  let keyword = params.keyword;
  if (keyword !== undefined && typeof keyword === 'string')
    re.keyword = [keyword];
  else re.keyword = keyword as string[];
  return re;
}
