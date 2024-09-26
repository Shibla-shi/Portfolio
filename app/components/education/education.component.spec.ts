import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationComponent],
      imports: [HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Corrected line
      // Add this line

    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
