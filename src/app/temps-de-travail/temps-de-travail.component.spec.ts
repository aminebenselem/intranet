import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsDeTravailComponent } from './temps-de-travail.component';

describe('TempsDeTravailComponent', () => {
  let component: TempsDeTravailComponent;
  let fixture: ComponentFixture<TempsDeTravailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempsDeTravailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempsDeTravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
