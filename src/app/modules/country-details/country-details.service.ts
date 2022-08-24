import { Injectable } from '@angular/core';
import { first, map, Observable, tap } from 'rxjs';
import { CONFIG } from 'src/assets/config/config';
import { CountryDetails } from '../shared/models/countryDetails';
import { ApiService } from '../shared/services/api.service';

@Injectable()
export class CountryDetailsService {
  constructor(private api: ApiService) {}

  public countryDetails?: Observable<CountryDetails>;
  public selectedCountryName?: string;

  fetchData(countryName: string): void {
    this.selectedCountryName = '...';

    const url = CONFIG.api.countryDetailsUrl.replace('{name}', countryName);

    this.countryDetails = this.api.get(url).pipe(
      first(),
      map((response) => response[0])
    );
  }
}
