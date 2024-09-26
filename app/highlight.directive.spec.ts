import { ElementRef, Renderer2 } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const el = {} as ElementRef;
    const renderer = {} as Renderer2;
    const directive = new HighlightDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
