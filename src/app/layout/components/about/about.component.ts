import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ConfigOptionsService } from '../../../shared/services/config-options.service';
import { APP_CONSTANTS, IAppConstants } from '../../../shared/services/constants.service';
import { APP_RANDOM_STRING_5 } from '../../../shared/services/generator.service';
import { LocalStorageService } from '../../../shared/services/local-storage.service';

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
    @Inject(APP_RANDOM_STRING_5) private randomString: string,
  ) {}

  ngOnInit(): void {
    this.testLocalStorage();

    this.testConfigOption();

    this.testConstantsInjection();

    this.testUseFactoryInjection();
  }

  private testLocalStorage() {
    const keyLS = 'localStorageKey';
    const valueLS = 'localStorageValue';
    this.localStorage.setLSItem(keyLS, valueLS);
    console.log(this.localStorage.getLSItem(keyLS), 'saved to Local storage!');
    setTimeout(() => {
      this.localStorage.removeLSItem('localStorageKey');
      console.log(valueLS, 'removed from Local storage!');
    }, 5000);
  }

  private testConfigOption() {
    const testConfigOption1 = { id: 1, email: 'vasya@gmail.com', login: 'Vasya' };
    this.configOption.setConfigOption(testConfigOption1);
    console.log('ConfigOptionFull:', this.configOption.getConfigOption());

    const testConfigOption2 = { id: 2, login: 'Kolya' };
    this.configOption.setConfigOption(testConfigOption2);
    console.log('ConfigOptionPartial:', this.configOption.getConfigOption());
  }

  private testConstantsInjection() {
    if (this.appConstants.App === 'BookShop' && this.appConstants.Ver === '1.0') {
      console.log('Constants injection works!');
    } else {
      console.log('Constants injection does NOT works!');
    }
  }

  private testUseFactoryInjection() {
    if (this.randomString && this.randomString.length === 5) {
      console.log('UseFactory injection works!');
    } else {
      console.log('UseFactory injection does NOT works!');
    }
  }
}
