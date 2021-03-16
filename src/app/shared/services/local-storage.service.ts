import { Injectable } from '@angular/core';

export interface ILocalStorage {
  key: string;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setLSItem(key: string, value: string | { [key: string]: Record<string, ILocalStorage> }): void {
    const storageValue = JSON.stringify(value);
    localStorage.setItem(key, storageValue);
  }

  getLSItem<T>(key: string): T {
    const storageValue = localStorage.getItem(key) || '{}';
    try {
      return JSON.parse(storageValue);
    } catch (err) {
      throw new SyntaxError(err);
    }
  }

  removeLSItem(key: string): void {
    localStorage.removeItem(key);
  }
}
