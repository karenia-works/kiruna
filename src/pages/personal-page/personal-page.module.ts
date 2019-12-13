import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalPageComponent } from './personal-page.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';

@NgModule({
  declarations: [PersonalPageComponent],
  imports: [CommonModule, BaseComponentsModule],
  exports: [PersonalPageComponent],
})
export class PersonalPageModule {}
