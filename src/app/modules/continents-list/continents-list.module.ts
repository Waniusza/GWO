import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentsListComponent } from './continents-list.component';
import { ContinentsListService } from './continents-list.service';
import { SharedModule } from '../shared/shared.module';
import { ContinentCardComponent } from './components/continent-card/continent-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContinentsListComponent, ContinentCardComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  providers: [ContinentsListService],
})
export class ContinentsListModule {}
