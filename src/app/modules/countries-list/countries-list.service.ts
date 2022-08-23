import { Injectable } from '@angular/core';
import { first, Observable, of } from 'rxjs';
import { CONFIG } from 'src/assets/config/config';
import { ApiService } from '../shared/services/api.service';
import {
  CountriesListResponse,
  CountryResponse,
} from './models/countryResponse';

@Injectable()
export class CountriesListService {
  constructor(private api: ApiService) {}

  public countriesList?: Observable<CountriesListResponse>;
  public selectedRegion?: string;

  fetchData(continentName: string): void {
    this.selectedRegion = continentName;

    const url = CONFIG.api.countriesListUrl.replace('{region}', continentName);

    this.countriesList = this.api.get(url).pipe(first());
  }
}
