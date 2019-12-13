import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalPageComponent } from './personal-page.component';



@NgModule({
  declarations: [PersonalPageComponent],
  imports: [
    CommonModule
  ],
  exports: [PersonalPageComponent]
})
export class PersonalPageModule { }
