import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]',
})
export class HighlightElementDirective implements AfterViewInit {
  private isInitialState = true;

  private initialFontSize!: string;

  private initialBorderStyle!: string;

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.initialBorderStyle = this.elementRef.nativeElement.style.borderStyle;
    this.initialFontSize = this.elementRef.nativeElement.style.fontSize;
  }

  @HostListener('click')
  onClick(): void {
    this.toggleHighlight();
  }

  toggleHighlight(): void {
    this.isInitialState = !this.isInitialState;

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'fontSize',
      this.isInitialState ? '1.1em' : this.initialFontSize,
    );

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'borderStyle',
      this.isInitialState ? 'inset' : this.initialBorderStyle,
    );
  }
}
