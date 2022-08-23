import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONFIG } from 'src/assets/config/config';

@Injectable()
export class ContinentsListService {
  constructor() {}

  fetchData(): Observable<Array<string>> {
    return of(CONFIG.regionsAvailable);
  }
}
