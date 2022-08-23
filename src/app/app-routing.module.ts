import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsListComponent } from './modules/continents-list/continents-list.component';
import { CountriesListComponent } from './modules/countries-list/countries-list.component';
import { CountryDetailsComponent } from './modules/country-details/country-details.component';

const routes: Routes = [
  {
    path: '',
    component: ContinentsListComponent,
  },
  {
    path: 'country/:country',
    component: CountryDetailsComponent,
  },
  {
    path: ':continent',
    component: CountriesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
