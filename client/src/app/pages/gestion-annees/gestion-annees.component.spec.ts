import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAnneesComponent } from './gestion-annees.component';

describe('GestionAnneesComponent', () => {
  let component: GestionAnneesComponent;
  let fixture: ComponentFixture<GestionAnneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAnneesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAnneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
