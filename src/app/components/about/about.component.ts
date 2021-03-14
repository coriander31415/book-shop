import { Component, Optional, OnInit, Inject } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ConfigOptionsService } from '../../services/config-options.service';
import { APP_CONSTANTS, IAppConstants } from '../../services/constants.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    @Optional() private localStorage: LocalStorageService,
    @Optional() private configOption: ConfigOptionsService,
    @Optional() @Inject(APP_CONSTANTS) private appConstants: IAppConstants,
  ) {}

  ngOnInit(): void {
    // Testing of LocalStorageService & ConfigOptionService
    this.localStorage.setLSItem('localStorageKey', 'LS tested!');

    const testConfigOption = { login: 'testLogin', email: 'testEmail' };
    this.configOption.setConfigOption(testConfigOption);

    setTimeout(() => this.localStorage.removeLSItem('localStorageKey'), 5000);
    setTimeout(() => this.localStorage.removeLSItem('configOptionKey'), 6000);

    this.testConstantsInjection();
  }

  private testConstantsInjection() {
    if (this.appConstants.App === 'BookShop' && this.appConstants.Ver === '1.0') {
      console.log('Constants injection works!');
    } else {
      console.log('Constants injection does NOT works!');
    }
  }
}
