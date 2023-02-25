import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualitesAdminComponent } from './actualites-admin.component';

describe('ActualitesAdminComponent', () => {
  let component: ActualitesAdminComponent;
  let fixture: ComponentFixture<ActualitesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualitesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualitesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
