import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchpageComponent } from './searchpage.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';

@NgModule({
  declarations: [SearchpageComponent],
  imports: [CommonModule, BaseComponentsModule],
})
export class SearchpageModule {}
