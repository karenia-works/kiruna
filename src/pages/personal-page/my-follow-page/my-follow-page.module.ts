import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFollowPageComponent } from './my-follow-page.component';



@NgModule({
  declarations: [MyFollowPageComponent],
  imports: [
    CommonModule
  ],
  exports: [MyFollowPageComponent]
})
export class MyFollowPageModule { }
