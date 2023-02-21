import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableaudeserviceComponent } from './tableaudeservice.component';

describe('TableaudeserviceComponent', () => {
  let component: TableaudeserviceComponent;
  let fixture: ComponentFixture<TableaudeserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableaudeserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableaudeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
