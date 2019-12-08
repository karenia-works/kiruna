import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';



@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [
    CommonModule
  ],
  exports: [NotFoundPageComponent]
})
export class ErrorPagesModule { }
