import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFavoritePageComponent } from './my-favorite-page.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';

@NgModule({
  declarations: [MyFavoritePageComponent],
  imports: [CommonModule, BaseComponentsModule],
  exports: [MyFavoritePageComponent],
})
export class MyFavoritePageModule {}
