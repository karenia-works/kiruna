import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TextboxComponent } from './textbox/textbox.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SearchbarComponent,
    TextboxComponent,
    ButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    SearchbarComponent,
    TextboxComponent,
    ButtonComponent,
  ],
})
export class BaseComponentsModule {}
