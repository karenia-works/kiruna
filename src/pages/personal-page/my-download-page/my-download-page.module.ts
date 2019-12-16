import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDownloadPageComponent } from './my-download-page.component';
import { RouterModule } from '@angular/router';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';

@NgModule({
  declarations: [MyDownloadPageComponent],
  imports: [CommonModule, RouterModule, BaseComponentsModule],
  exports: [MyDownloadPageComponent],
})
export class MyDownloadPageModule {}
