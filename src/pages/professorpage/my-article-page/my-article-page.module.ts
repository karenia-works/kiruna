import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyArticlePageComponent } from './my-article-page.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';
import {RouterModule} from "@angular/router";
@NgModule({
  declarations: [MyArticlePageComponent],
  imports: [CommonModule, BaseComponentsModule, RouterModule],
  exports: [MyArticlePageComponent],
})
export class MyArticlePageModule {}
