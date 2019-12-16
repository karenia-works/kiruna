import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDownloadPageComponent } from './my-download-page.component';



@NgModule({
  declarations: [MyDownloadPageComponent],
  imports: [
    CommonModule
  ],
  exports: [MyDownloadPageComponent]
})
export class MyDownloadPageModule { }
