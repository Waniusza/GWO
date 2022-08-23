import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountriesListService } from './countries-list.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    public continentsListService: CountriesListService
  ) {}

  private paramsSubscribtion?: Subscription;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log('CountriesListComponent::ngOnInit', {
        params,
      });
      this.continentsListService.fetchData(params['continent']);
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSubscribtion) this.paramsSubscribtion.unsubscribe();
  }
}
