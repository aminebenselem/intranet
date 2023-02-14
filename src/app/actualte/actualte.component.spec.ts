import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualteComponent } from './actualte.component';

describe('ActualteComponent', () => {
  let component: ActualteComponent;
  let fixture: ComponentFixture<ActualteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
