import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailsComponent } from './country-details.component';
import { CountryDetailsService } from './country-details.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CountryDetailsComponent],
  imports: [CommonModule, SharedModule],
  exports: [CountryDetailsComponent],
  providers: [CountryDetailsService],
})
export class CountryDetailsModule {}
