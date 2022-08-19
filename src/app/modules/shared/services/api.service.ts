import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, tap } from 'rxjs';
import { ApiCacheService } from './api-cache.service copy';
import { NotificationService } from './notification.service';

@Injectable()
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private cacheService: ApiCacheService,
    private notificationService: NotificationService
  ) {}

  get(url: string): Observable<any> {
    const cachedObj = this.cacheService.get(url);

    if (cachedObj) {
      return of(cachedObj);
    }
    return this.httpClient.get(url).pipe(
      retry(2),
      tap((response) => {
        this.cacheService.put(url, response);
      }),
      catchError((err: HttpErrorResponse) => {
        console.error(err);
        this.notificationService.show(`Error while fetching data from: ${url}`);
        throw err;
      })
    );
  }
}
