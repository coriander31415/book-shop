import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('appTitle', { static: false }) appTitle!: ElementRef;

  bookShopTitle = 'Book Shop';

  ngOnInit(): void {
    setTimeout(() => {
      this.appTitle.nativeElement.textContent = this.bookShopTitle;
    }, 0);
  }
}
