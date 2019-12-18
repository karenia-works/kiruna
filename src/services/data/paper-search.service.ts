import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paper } from 'src/models/paper';
import { Subject } from 'rxjs';

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

export class PaperQuery extends Subject<Paper> {
  /**
   *
   */
  constructor(param: PaperQueryParam, private httpClient: HttpClient) {
    super();
  }

  query() {}
}

export interface PaperQueryParam {
  searchKw?: string[];
  keyword?: string[];
  author?: string[];
  startTine?: number;
  endTime?: number;
  initialSkip?: number;
  initialTake?: number;
}
