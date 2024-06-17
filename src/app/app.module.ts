import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBar1Component } from './nav-bar1/nav-bar1.component';
import { HomeComponent } from './home/home.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
registerLocaleData(en);
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Home2Component } from './home2/home2.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBar1Component,
    HomeComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzMenuModule,
    HttpClientModule,
    NzIconModule

  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
