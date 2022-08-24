import { Pipe, PipeTransform } from '@angular/core';
import { CountryDetails } from '../models/countryDetails';

export function getCountryName(country: CountryDetails): string {
  return country.translations['pol']
    ? country.translations['pol'].official
    : country.name.official;
}
@Pipe({
  name: 'countryName',
  pure: true,
})
export class CountryNamePipe implements PipeTransform {
  transform(country: CountryDetails | null): string {
    if (!!country) {
      return getCountryName(country);
    }
    return '';
  }
}
