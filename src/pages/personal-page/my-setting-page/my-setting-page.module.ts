import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySettingPageComponent } from './my-setting-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MySettingPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [MySettingPageComponent],
})
export class MySettingPageModule {}
