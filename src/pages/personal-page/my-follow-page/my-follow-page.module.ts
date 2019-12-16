import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFollowPageComponent } from './my-follow-page.component';
import { RouterModule } from '@angular/router';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';

@NgModule({
  declarations: [MyFollowPageComponent],
  imports: [CommonModule, RouterModule, BaseComponentsModule],
  exports: [MyFollowPageComponent],
})
export class MyFollowPageModule {}
