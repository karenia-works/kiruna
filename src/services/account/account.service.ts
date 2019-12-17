import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, config, Subject } from 'rxjs';
import 'rxjs/operators';
import { apiConfig } from 'src/environments/backend-config';
import { multicast } from 'rxjs/operators';
import { userInfo } from 'os';
import { LoginResult, TokenContext } from 'src/models/account';
import { environment } from 'src/environments/environment';
import { ApiResult } from 'src/models/result';

@Injectable({ providedIn: 'root' })
export class AccountService implements HttpInterceptor {
  /**
   *
   */
  constructor(private httpClient: HttpClient) {
    this.loadLoginData();
  }

  public loggedIn = false;
  loginResult?: LoginResult;

  /**
   * Intercepts any outgoing HTTP request toward backend and add access token to them
   * @param req Request
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

  saveLoginData() {
    if (this.loggedIn) {
      window.localStorage.setItem('login', JSON.stringify(this.loginResult));
    }
  }

  loadLoginData() {
    let login = window.localStorage.getItem('login');
    if (login !== null) {
      this.loginResult = JSON.parse(login);
      this.loggedIn = true;
    }
  }

  clearLoginData() {
    window.localStorage.removeItem('login');
  }

  login(username: string, password: string): Observable<LoginResult> {
    return new Observable<LoginResult>(sub => {
      const { next, complete, error } = sub;
      let ctx: TokenContext = {
        client_id: 'client',
        client_secret: 'client',
        grant_type: 'password',
        username,
        password,
        scope: 'api',
      };
      let res = this.httpClient.post<ApiResult<LoginResult>>(
        environment.endpoint + apiConfig.endpoints.account.login,
        ctx
      );
      res.subscribe({
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
    this.clearLoginData();
  }
}

export interface UserInfo {
  id: string;
}
