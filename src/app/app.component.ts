import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', { static: false }) appTitle!: ElementRef;

  bookShopTitle = 'Book Shop';

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = this.bookShopTitle;
  }
}
