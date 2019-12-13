import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AccountService {
  /**
   *
   */
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    this.httpClient.post();
  }
}

export interface UserInfo {
  id: string;
}
