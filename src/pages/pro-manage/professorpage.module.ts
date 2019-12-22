import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';
import { RouterModule } from '@angular/router';
import { ProSearchComponent } from './pro-manage.component';

@NgModule({
  declarations: [ProSearchComponent],
  imports: [CommonModule, BaseComponentsModule, RouterModule],
  exports: [ProSearchComponent],
})
export class ProfessorSearchModule {}
