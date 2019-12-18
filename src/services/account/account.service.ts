import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, config, Subject } from 'rxjs';
import 'rxjs/operators';
import { apiConfig } from 'src/environments/backend-config';
import { multicast } from 'rxjs/operators';
import { LoginResult, TokenContext } from 'src/models/account';
import { environment } from 'src/environments/environment';
import { ApiResult } from 'src/models/result';
import qs from 'qs';

@Injectable({ providedIn: 'root' })
export class AccountService extends Subject<UserInfo | undefined>
  implements HttpInterceptor {
  /**
   *
   */
  constructor(private httpClient: HttpClient) {
    super();
    this.next(undefined);
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

  async loadLoginData() {
    let login = window.localStorage.getItem('login');
    if (login !== null) {
      this.loginResult = JSON.parse(login);
      this.loggedIn = true;
      this.next({ username: 'Some' });
    }
  }

  clearLoginData() {
    window.localStorage.removeItem('login');
  }

  async login(username: string, password: string): Promise<LoginResult> {
    let ctx: TokenContext = {
      client_id: 'client',
      client_secret: 'client',
      grant_type: 'password',
      username,
      password,
      // scope: 'scope',
    };
    try {
      let result = await this.httpClient
        .post<LoginResult>(
          environment.endpoint + apiConfig.endpoints.account.login,
          qs.stringify(ctx),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        )
        .toPromise();
      this.loginResult = result;
      this.loggedIn = true;
      this.saveLoginData();
      return result;
    } catch (e) {
      this.loggedIn = false;
      throw new Error('Failed to login. Reason: ' + JSON.stringify(e.error));
    }
  }

  logout() {
    this.loggedIn = false;
    this.loginResult = undefined;
    this.clearLoginData();
  }
}

export interface UserInfo {
  username: string;
}
