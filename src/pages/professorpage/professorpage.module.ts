import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorPageComponent } from './professorpage.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [ProfessorPageComponent],
  imports: [CommonModule, BaseComponentsModule, RouterModule],
  exports: [ProfessorPageComponent],
})
export class ProfessorPageModule {}
