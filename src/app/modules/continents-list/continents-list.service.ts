import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONFIG } from 'src/assets/config/config';
import { ApiService } from '../shared/services/api.service';

@Injectable()
export class ContinentsListService {
  constructor(private api: ApiService) {}

  fetchData(): Observable<Array<string>> {
    return of(CONFIG.regionsAvailable);
  }
}
