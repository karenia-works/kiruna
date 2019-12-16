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
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
