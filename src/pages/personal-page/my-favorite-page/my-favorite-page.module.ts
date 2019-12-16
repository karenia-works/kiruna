import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyFavoritePageComponent } from './my-favorite-page.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [MyFavoritePageComponent],
  imports: [CommonModule, BaseComponentsModule, RouterModule],
  exports: [MyFavoritePageComponent],
})
export class MyFavoritePageModule {}
