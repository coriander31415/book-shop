import { InjectionToken } from '@angular/core';

export interface IAppConstants {
  App: string;
  Ver: string;
}

export const APP_CONSTANTS = new InjectionToken<IAppConstants>('appConstants');

export const ConstantsService: IAppConstants = {
  App: 'BookShop',
  Ver: '1.0',
};
