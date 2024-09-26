import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './admin.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,ReactiveFormsModule] // Add this line
    });
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
