import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleAbstractComponent } from './article-abstract/article-abstract.component';
import { RouterModule } from '@angular/router';
import { PagerComponent } from './pager/pager.component';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProAbstractComponent } from './pro-abstract/pro-abstract.component';
import { UserAbstractComponent } from './user-abstract/user-abstract.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SearchbarComponent,
    FooterComponent,
    ArticleAbstractComponent,
    PagerComponent,
    PaginatorComponent,
    ProAbstractComponent,
    UserAbstractComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    NavbarComponent,
    SearchbarComponent,
    FooterComponent,
    ArticleAbstractComponent,
    PagerComponent,
    PaginatorComponent,
    ProAbstractComponent,
    UserAbstractComponent,
  ],
})
export class BaseComponentsModule {}
