import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDatatableComponent } from './session-datatable.component';

describe('SessionDatatableComponent', () => {
  let component: SessionDatatableComponent;
  let fixture: ComponentFixture<SessionDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
