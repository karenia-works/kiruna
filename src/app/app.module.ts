import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponentsModule } from 'src/components/base-components/base-components.module';
import { MainpageModule } from 'src/pages/mainpage/mainpage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { SearchpageModule } from 'src/pages/searchpage/searchpage.module';
import { ProfessorpageModule } from 'src/pages/professorpage/professorpage.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from 'src/pages/login-page/login-page.component';
import { RegisterPageComponent } from 'src/pages/register-page/register-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, RegisterPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseComponentsModule,
    MainpageModule,
    BrowserAnimationsModule,
    SearchpageModule,
    ProfessorpageModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
