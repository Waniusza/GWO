import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { CONFIG } from 'src/assets/config/config';
import { CountryDetails } from '../shared/models/countryDetails';
import { getCountryName } from '../shared/pipes/country-name.pipe';
import { ApiService } from '../shared/services/api.service';
import { CountriesListResponse } from './models/countriesListResponse';

@Injectable()
export class CountriesListService {
  constructor(private api: ApiService) {}

  public countriesList?: Observable<CountriesListResponse>;
  public selectedRegion?: string;

  fetchData(continentName: string): void {
    this.selectedRegion = continentName;

    const url = CONFIG.api.countriesListUrl.replace('{region}', continentName);

    this.countriesList = this.api.get(url).pipe(
      first(),
      map((response) =>
        (response as CountryDetails[]).sort((countryA, countryB) =>
          getCountryName(countryA) < getCountryName(countryB) ? -1 : 1
        )
      )
    );
  }
}
