import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText: string = '';
  private tooltipElement: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    if (!this.tooltipElement) {
      this.tooltipElement = this.renderer.createElement('span');
      this.tooltipElement!.textContent = this.tooltipText;
      this.renderer.addClass(this.tooltipElement, 'tooltip');
      this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
    }
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
