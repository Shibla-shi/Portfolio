import { AutoFocusDirective } from './autofocus.directive';
import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('AutoFocusDirective', () => {
  let elRefMock: ElementRef;

  beforeEach(() => {
    elRefMock = {
      nativeElement: document.createElement('input') // or any other DOM element
    };

    TestBed.configureTestingModule({
      declarations: [AutoFocusDirective],
      providers: [{ provide: ElementRef, useValue: elRefMock }]
    });
  });

  it('should create an instance', () => {
    const directive = new AutoFocusDirective(elRefMock);
    expect(directive).toBeTruthy();
  });

  it('should set focus on the native element after view initialization', () => {
    const directive = new AutoFocusDirective(elRefMock);
    spyOn(elRefMock.nativeElement, 'focus');

    directive.ngAfterViewInit();

    expect(elRefMock.nativeElement.focus).toHaveBeenCalled();
  });
});
