import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';
import { MainpageModule } from 'src/pages/mainpage/mainpage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseComponentsModule,
    MainpageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
