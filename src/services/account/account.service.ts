import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, config, Subject } from 'rxjs';
import 'rxjs/operators';
import { apiConfig } from 'src/environments/backend-config';
import { multicast } from 'rxjs/operators';
import { userInfo } from 'os';

@Injectable({ providedIn: 'root' })
export class AccountService implements HttpInterceptor {
  /**
   *
   */
  constructor(private httpClient: HttpClient) {}

  public loggedIn = false;
  loginResult?: LoginResult;

  /**
   * Intercepts any outgoing HTTP request toward backend and add access token to them
   * @param req Request
   * @param next
   */
  intercept(
    req: import('@angular/common/http').HttpRequest<any>,
    next: import('@angular/common/http').HttpHandler
  ): Observable<import('@angular/common/http').HttpEvent<any>> {
    if (this.loggedIn) {
      req.headers.append(
        'Authorization',
        `Bearer ${this.loginResult.access_token}`
      );
    }
    return next.handle(req);
  }

  login(username: string, password: string): Observable<LoginResult> {
    return new Observable<LoginResult>(sub => {
      const { next, complete, error } = sub;
      let mult = this.httpClient.post<ApiResult<LoginResult>>(
        apiConfig.endpoints.account.login,
        {
          username,
          password,
        }
      );
      mult.subscribe({
        next: info => {
          this.loginResult = info.data;
          next(info.data);
          complete();
        },
        error: err => {
          error(err);
        },
      });
    });
  }

  logout() {
    this.loggedIn = false;
    this.loginResult = undefined;
  }
}

export interface UserInfo {
  id: string;
}
