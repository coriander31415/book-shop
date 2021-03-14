import { Component, Optional, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ConfigOptionsService } from '../../services/config-options.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    @Optional() private localStorage: LocalStorageService,
    @Optional() private configOption: ConfigOptionsService,
  ) {}

  ngOnInit(): void {
    // Testing of LocalStorageService & ConfigOptionService
    this.localStorage.setLSItem('localStorageKey', 'LS tested!');

    const testConfigOption = { login: 'testLogin', email: 'testEmail' };
    this.configOption.setConfigOption(testConfigOption);

    setTimeout(() => this.localStorage.removeLSItem('localStorageKey'), 5000);
    setTimeout(() => this.localStorage.removeLSItem('configOptionKey'), 6000);
  }
}
