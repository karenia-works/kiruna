import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySettingPageComponent } from './my-setting-page.component';



@NgModule({
  declarations: [MySettingPageComponent],
  imports: [
    CommonModule
  ],
  exports: [MySettingPageComponent]
})
export class MySettingPageModule { }
