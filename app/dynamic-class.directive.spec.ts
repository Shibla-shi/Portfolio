import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, ElementRef, Renderer2 } from '@angular/core';
import { DynamicClassDirective } from './dynamic-class.directive';

describe('DynamicClassDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicClassDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should create an instance', () => {
    const el = {} as ElementRef;
    const renderer = {} as Renderer2;
    const directive = new DynamicClassDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
