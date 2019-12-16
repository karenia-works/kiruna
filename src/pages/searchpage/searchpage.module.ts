import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchpageComponent } from './searchpage.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [SearchpageComponent],
  imports: [BaseComponentsModule, BrowserModule, PaginationModule.forRoot()],
  providers: [],
  bootstrap: [SearchpageComponent]
})
export class SearchpageModule {}
