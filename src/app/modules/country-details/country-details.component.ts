import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryDetails } from '../shared/models/countryDetails';
import { CountryDetailsService } from './country-details.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  constructor(
    public countryDetailsService: CountryDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.countryDetailsService.fetchData(this.route.snapshot.params['country']);
  }
}
