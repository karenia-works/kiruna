import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleAbstractComponent } from './article-abstract/article-abstract.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    SearchbarComponent,
    FooterComponent,
    ArticleAbstractComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    SearchbarComponent,
    FooterComponent,
    ArticleAbstractComponent,
  ],
})
export class BaseComponentsModule {}
