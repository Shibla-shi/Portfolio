import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDynamicClass]'
})
export class DynamicClassDirective {

  @Input('appDynamicClass') set condition(condition: boolean) {
    if (condition) {
      this.renderer.addClass(this.el.nativeElement, 'dynamic-class');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'dynamic-class');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }
}
