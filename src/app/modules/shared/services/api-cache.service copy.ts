import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

interface CacheObject {
  response: any;
  validTill: number;
}

const CACHE_VALIDATION_DURATION_MS = 5 * 60 * 1000; // 5 minutes
const CLEAN_UP_INTERVAL_MS = 1 * 60 * 1000; // 1 minute

@Injectable()
export class ApiCacheService {
  private cacheMap: { [url: string]: CacheObject } = {};

  constructor() {
    // Periodicaly clear old data
    interval(CLEAN_UP_INTERVAL_MS).subscribe((_) => {
      Object.keys(this.cacheMap).forEach((key) => {
        if (!this.isValid(this.cacheMap[key])) {
          delete this.cacheMap[key];
        }
      });
    });
  }

  put(url: string, response: any): void {
    this.cacheMap[url] = {
      response: response,
      validTill: Date.now(),
    };
  }

  get(url: string): any | null {
    const cacheObj = this.cacheMap[url];

    if (cacheObj && this.isValid(cacheObj)) {
      return cacheObj.response;
    }
    return null;
  }

  private isValid(cacheObj: CacheObject): boolean {
    return cacheObj.validTill > Date.now();
  }
}
