import { Injectable } from '@angular/core';
import { IConfigOptions } from '../models/config-options.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigOptionsService {
  private option!: IConfigOptions;

  setConfigOption(configOption: Partial<IConfigOptions>): void {
    this.option = { ...this.option, ...configOption };
  }

  getConfigOption(): Partial<IConfigOptions> {
    return this.option;
  }
}
