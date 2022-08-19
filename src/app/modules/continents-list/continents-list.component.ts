import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContinentsListService } from './continents-list.service';

@Component({
  selector: 'app-continents-list',
  templateUrl: './continents-list.component.html',
  styleUrls: ['./continents-list.component.scss'],
})
export class ContinentsListComponent implements OnInit {
  continentsList?: Observable<Array<string>>;

  constructor(private continentsListService: ContinentsListService) {}

  ngOnInit(): void {
    this.continentsList = this.continentsListService.fetchData();
  }
}
