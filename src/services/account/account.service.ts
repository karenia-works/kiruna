import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, config, Subject } from 'rxjs';
import 'rxjs/operators';
import { apiConfig } from 'src/environments/backend-config';
import { multicast } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AccountService implements HttpInterceptor {
  intercept(
    req: import('@angular/common/http').HttpRequest<any>,
    next: import('@angular/common/http').HttpHandler
  ): Observable<import('@angular/common/http').HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }
  // /**
  //  *
  //  */
  // constructor(private httpClient: HttpClient) {}

  // // tslint:disable: variable-name
  // public userInfo: Subject<UserInfo> = new Subject<UserInfo>();
  // private _loggedIn = false;
  // // tslint:enable: variable-name

  // // public get userInfo(): UserInfo | undefined {
  // //   return this._userInfo.;
  // // }
  // public get loggedIn(): boolean {
  //   return this._loggedIn;
  // }

  // login(username: string, password: string): Observable<UserInfo> {
  //   let mult = this.httpClient
  //     .post<UserInfo>(apiConfig.endpoints.account.login, {
  //       username,
  //       password,
  //     })
  //     .pipe(multicast(() => new Subject<UserInfo>()));
  //   mult.subscribe({
  //     next: info => {
  //       this.userInfo.next(info);
  //       this._loggedIn = true;
  //     },
  //   });
  //   return mult;
  // }

  // logout() {
  //   this._loggedIn = false;
  // }

  interceptHttp() {}
}

export interface UserInfo {
  id: string;
}
