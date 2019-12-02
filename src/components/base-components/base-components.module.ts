import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, SearchbarComponent, FooterComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, SearchbarComponent, FooterComponent],
})
export class BaseComponentsModule {}
