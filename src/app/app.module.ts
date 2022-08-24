import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContinentsListModule } from './modules/continents-list/continents-list.module';
import { CountriesListModule } from './modules/countries-list/countries-list.module';
import { CountryDetailsModule } from './modules/country-details/country-details.module';
import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePl);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ContinentsListModule,
    CountriesListModule,
    CountryDetailsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pl-PL' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
