import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonalPageComponent } from './personal-page.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';

@NgModule({
  declarations: [PersonalPageComponent],
  imports: [CommonModule, BaseComponentsModule, RouterModule],
  exports: [PersonalPageComponent],
})
export class PersonalPageModule {}
