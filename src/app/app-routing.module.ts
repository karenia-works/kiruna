import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from 'src/pages/mainpage/mainpage.component';
import { MainpageModule } from 'src/pages/mainpage/mainpage.module';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainpageModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
