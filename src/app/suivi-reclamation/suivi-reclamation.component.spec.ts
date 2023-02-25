import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviReclamationComponent } from './suivi-reclamation.component';

describe('SuiviReclamationComponent', () => {
  let component: SuiviReclamationComponent;
  let fixture: ComponentFixture<SuiviReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
