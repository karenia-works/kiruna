import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';
import {BrowserModule} from '@angular/platform-browser';
import { ProManageComponent } from './pro-manage/pro-manage.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { ArticleManageComponent } from './article-manage/article-manage.component';
import { ProApplyManageComponent } from './pro-apply-manage/pro-apply-manage.component';

@NgModule({
  declarations: [AdminPageComponent, ProManageComponent, UserManageComponent, ArticleManageComponent, ProApplyManageComponent],
  imports: [
    CommonModule, BaseComponentsModule, RouterModule, BrowserModule
  ],
  exports: [AdminPageComponent],
})
export class AdminPageModule { }
