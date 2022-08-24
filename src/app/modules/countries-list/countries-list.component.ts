import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountriesListService } from './countries-list.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public continentsListService: CountriesListService
  ) {}

  ngOnInit(): void {
    this.continentsListService.fetchData(
      this.route.snapshot.params['continent']
    );
  }
}
