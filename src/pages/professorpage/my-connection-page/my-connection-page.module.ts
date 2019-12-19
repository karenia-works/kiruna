import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyConnectionPageComponent } from './my-connection-page.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';
import {RouterModule} from "@angular/router";
@NgModule({
  declarations: [MyConnectionPageComponent],
  imports: [CommonModule, BaseComponentsModule, RouterModule],
  exports: [MyConnectionPageComponent],
})
export class MyConnectionPageModule {}
