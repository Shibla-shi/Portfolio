import { ElementRef, Renderer2 } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';

describe('TooltipDirective', () => {
  it('should create an instance', () => {
    const el = {} as ElementRef;
    const renderer = {} as Renderer2;
    const directive = new TooltipDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
