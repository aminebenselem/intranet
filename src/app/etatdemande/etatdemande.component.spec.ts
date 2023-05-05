import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatdemandeComponent } from './etatdemande.component';

describe('EtatdemandeComponent', () => {
  let component: EtatdemandeComponent;
  let fixture: ComponentFixture<EtatdemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatdemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
