import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheadminComponent } from './ficheadmin.component';

describe('FicheadminComponent', () => {
  let component: FicheadminComponent;
  let fixture: ComponentFixture<FicheadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
