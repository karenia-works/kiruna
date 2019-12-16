import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFavoritePageComponent } from './my-favorite-page.component';



@NgModule({
  declarations: [MyFavoritePageComponent],
  imports: [
    CommonModule
  ],
  exports: [MyFavoritePageComponent]
})
export class MyFavoritePageModule { }
