import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchpageComponent } from './searchpage.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProSearchComponent } from '../pro-search/pro-search.component';

@NgModule({
  declarations: [SearchpageComponent, ProSearchComponent],
  imports: [BaseComponentsModule, BrowserModule],
  providers: [],
  exports: [ProSearchComponent],
  bootstrap: [SearchpageComponent],
})
export class SearchpageModule {}
