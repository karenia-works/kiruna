import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFollowPageComponent } from './my-follow-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyFollowPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [MyFollowPageComponent],
})
export class MyFollowPageModule {}
