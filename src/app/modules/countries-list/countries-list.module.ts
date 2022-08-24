import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesListComponent } from './countries-list.component';
import { CountriesListService } from './countries-list.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CountriesListComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [CountriesListComponent],
  providers: [CountriesListService],
})
export class CountriesListModule {}
