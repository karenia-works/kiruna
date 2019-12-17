import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from 'src/pages/mainpage/mainpage.component';
import { MainpageModule } from 'src/pages/mainpage/mainpage.module';
import { SearchpageComponent } from 'src/pages/searchpage/searchpage.component';
import { ErrorPagesModule } from 'src/pages/error-pages/error-pages.module';
import { NotFoundPageComponent } from 'src/pages/error-pages/not-found-page/not-found-page.component';
import {MyArticlePageComponent} from 'src/pages/professorpage/my-article-page/my-article-page.component';
import {MyConnectionPageComponent} from 'src/pages/professorpage/my-connection-page/my-connection-page.component';
import {ProfessorPageComponent} from 'src/pages/professorpage/professorpage.component';
import {ProfessorPageModule} from 'src/pages/professorpage/professorpage.module';
import {MyArticlePageModule} from 'src/pages/professorpage/my-article-page/my-article-page.module';
import {MyConnectionPageModule} from 'src/pages/professorpage/my-connection-page/my-connection-page.module';

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
    path: 'p',
    children: [
      {
        path: '',
        component: ProfessorPageComponent,
      },
      {
        path: 'article',
        component: MyArticlePageComponent,
      },
      {
        path: 'connection',
        component: MyConnectionPageComponent,
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
    ProfessorPageModule,
    MyArticlePageModule,
    MyConnectionPageModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
