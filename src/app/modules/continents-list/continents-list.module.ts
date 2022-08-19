import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentsListComponent } from './continents-list.component';
import { ContinentsListService } from './continents-list.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContinentsListComponent],
  imports: [CommonModule, SharedModule],
  providers: [ContinentsListService],
})
export class ContinentsListModule {}
