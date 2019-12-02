import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [NavbarComponent, SearchbarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, SearchbarComponent],
})
export class BaseComponentsModule {}
