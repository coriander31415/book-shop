import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setLSItem(key: string, value: string | { [key: string]: any }): void {
    const storageValue = JSON.stringify(value);
    localStorage.setItem(key, storageValue);
  }

  getLSItem<T>(key: string): T {
    const storageValue = localStorage.getItem(key) || '{}';
    return JSON.parse(storageValue);
  }

  removeLSItem(key: string): void {
    localStorage.removeItem(key);
  }
}
