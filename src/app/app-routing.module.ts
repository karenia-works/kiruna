import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from 'src/pages/mainpage/mainpage.component';
import { MainpageModule } from 'src/pages/mainpage/mainpage.module';
import { SearchpageComponent } from 'src/pages/searchpage/searchpage.component';
import { ErrorPagesModule } from 'src/pages/error-pages/error-pages.module';
import { NotFoundPageComponent } from 'src/pages/error-pages/not-found-page/not-found-page.component';
import { PersonalPageComponent } from 'src/pages/personal-page/personal-page.component';
import { PersonalPageModule } from 'src/pages/personal-page/personal-page.module';
import { MyFavoritePageComponent } from 'src/pages/personal-page/my-favorite-page/my-favorite-page.component';
import { MyFavoritePageModule } from 'src/pages/personal-page/my-favorite-page/my-favorite-page.module';
import { MyDownloadPageComponent } from 'src/pages/personal-page/my-download-page/my-download-page.component';
import { MyDownloadPageModule } from 'src/pages/personal-page/my-download-page/my-download-page.module';
import { MyFollowPageComponent } from 'src/pages/personal-page/my-follow-page/my-follow-page.component';
import { MyFollowPageModule } from 'src/pages/personal-page/my-follow-page/my-follow-page.module';
import { MySettingPageComponent } from 'src/pages/personal-page/my-setting-page/my-setting-page.component';
import { MySettingPageModule } from 'src/pages/personal-page/my-setting-page/my-setting-page.module';
import { MyPaymentPageComponent } from 'src/pages/personal-page/my-payment-page/my-payment-page.component';
import { MyPaymentPageModule } from 'src/pages/personal-page/my-payment-page/my-payment-page.module';
import { LoginPageComponent } from 'src/pages/login-page/login-page.component';
import { RegisterPageComponent } from 'src/pages/register-page/register-page.component';
import { ProfessorRegisterModule } from 'src/pages/register-page/professor-register/professor-register.module';
import { ProfessorRegisterComponent } from 'src/pages/register-page/professor-register/professor-register.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: 's',
    component: SearchpageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'pro_register',
    component: ProfessorRegisterComponent,
  },
  {
    // Personal page
    path: 'me',
    children: [
      {
        path: '',
        component: PersonalPageComponent,
      },
      {
        path: 'favorite',
        component: MyFavoritePageComponent,
      },
      {
        path: 'download',
        component: MyDownloadPageComponent,
      },
      {
        path: 'payment',
        component: MyPaymentPageComponent,
      },
      {
        path: 'setting',
        component: MySettingPageComponent,
      },
      {
        path: 'follow',
        component: MyFollowPageComponent,
      },
    ],
  },
  {
    // 404 page
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainpageModule,
    ErrorPagesModule,
    PersonalPageModule,
    MyFavoritePageModule,
    MyFollowPageModule,
    MyDownloadPageModule,
    MyPaymentPageModule,
    MySettingPageModule,
    ProfessorRegisterModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
