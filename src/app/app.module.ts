import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContinentsListModule } from './modules/continents-list/continents-list.module';
import { CountriesListModule } from './modules/countries-list/countries-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ContinentsListModule,
    CountriesListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
