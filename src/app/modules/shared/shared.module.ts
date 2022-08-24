import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ApiService } from './services/api.service';
import { ApiCacheService } from './services/api-cache.service copy';
import { NotificationService } from './services/notification.service';
import { RouterModule } from '@angular/router';
import { CountryFlagComponent } from './components/country-flag/country-flag.component';
import { CountryNamePipe } from './pipes/country-name.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    CountryFlagComponent,
    CountryNamePipe,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [
    FooterComponent,
    NavComponent,
    CountryFlagComponent,
    CountryNamePipe,
  ],
  providers: [ApiService, ApiCacheService, NotificationService],
})
export class SharedModule {}
