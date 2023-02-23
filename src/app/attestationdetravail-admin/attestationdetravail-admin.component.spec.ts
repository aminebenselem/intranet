import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationdetravailAdminComponent } from './attestationdetravail-admin.component';

describe('AttestationdetravailAdminComponent', () => {
  let component: AttestationdetravailAdminComponent;
  let fixture: ComponentFixture<AttestationdetravailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttestationdetravailAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationdetravailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
