import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSessionsComponent } from './gestion-sessions.component';

describe('GestionSessionsComponent', () => {
  let component: GestionSessionsComponent;
  let fixture: ComponentFixture<GestionSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
