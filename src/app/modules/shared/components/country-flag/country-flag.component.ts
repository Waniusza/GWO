import { Component, Input, OnInit } from '@angular/core';
import { CountryDetails } from '../../models/countryDetails';

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.scss'],
})
export class CountryFlagComponent {
  @Input() country?: CountryDetails;
}
