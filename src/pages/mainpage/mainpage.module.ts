import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';

@NgModule({
  declarations: [MainpageComponent],
  imports: [CommonModule, BaseComponentsModule],
  exports: [MainpageComponent],
})
export class MainpageModule {}
