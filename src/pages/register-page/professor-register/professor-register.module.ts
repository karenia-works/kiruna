import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorRegisterComponent } from './professor-register.component';



@NgModule({
  declarations: [ProfessorRegisterComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfessorRegisterComponent]
})
export class ProfessorRegisterModule { }
