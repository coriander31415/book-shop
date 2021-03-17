import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { HOVER_BACKGROUND_COLOR } from '../constants/colors';

@Directive({
  selector: '[appBackGroundOnHover]',
})
export class ChangeBackgroundDirective implements AfterViewInit {
  @Input('appBackGroundOnHover') backgroundColor: string = HOVER_BACKGROUND_COLOR;

  private initialColor!: string;

  constructor(private element: ElementRef<HTMLElement>) {}

  @HostBinding('style.backgroundColor') elementBackground!: string;

  ngAfterViewInit(): void {
    this.initialColor = this.element.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseover')
  onMouseOver(): void {
    this.elementBackground = this.backgroundColor;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.elementBackground = this.initialColor;
  }
}
