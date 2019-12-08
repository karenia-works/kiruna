import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from 'src/pages/mainpage/mainpage.component';
import { MainpageModule } from 'src/pages/mainpage/mainpage.module';
import { SearchpageComponent } from 'src/pages/searchpage/searchpage.component';
import { ErrorPagesModule } from 'src/pages/error-pages/error-pages.module';
import { NotFoundPageComponent } from 'src/pages/error-pages/not-found-page/not-found-page.component';

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
    // 404 page
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainpageModule, ErrorPagesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
