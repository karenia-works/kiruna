import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorpageComponent } from './professorpage.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [ProfessorpageComponent],
  imports: [CommonModule, BaseComponentsModule, BrowserAnimationsModule],
  exports: [ProfessorpageComponent],
})
export class ProfessorpageModule {}
