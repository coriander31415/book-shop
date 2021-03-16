import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutComponent],
  exports: [AboutComponent],
})
export class LayoutModule {}
