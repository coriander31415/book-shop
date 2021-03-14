import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { IConfigOptions } from '../models/config-options.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigOptionsService {
  constructor(private localStorage: LocalStorageService) {}

  setConfigOption(configOption: IConfigOptions): void {
    this.localStorage.setLSItem('configOptionKey', configOption);
  }

  getConfigOption(key: string): void {
    this.localStorage.getLSItem(key);
  }
}
