import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDownloadPageComponent } from './my-download-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyDownloadPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [MyDownloadPageComponent],
})
export class MyDownloadPageModule {}
