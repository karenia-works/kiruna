import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleAbstractComponent } from './article-abstract/article-abstract.component';
import { RouterModule } from '@angular/router';
import { PagerComponent } from './pager/pager.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SearchbarComponent,
    FooterComponent,
    ArticleAbstractComponent,
    PagerComponent,
    PaginatorComponent,
  ],
  imports: [CommonModule, RouterModule, PaginationModule.forRoot(), FormsModule],
  exports: [
    NavbarComponent,
    SearchbarComponent,
    FooterComponent,
    ArticleAbstractComponent,
    PagerComponent,
    PaginatorComponent,
  ],
})
export class BaseComponentsModule {}
