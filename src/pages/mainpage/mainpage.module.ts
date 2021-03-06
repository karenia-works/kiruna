import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [MainpageComponent],
  imports: [CommonModule, BaseComponentsModule, BrowserAnimationsModule],
  exports: [MainpageComponent],
})
export class MainpageModule {}
