import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutenanceFormComponent } from './soutenance-form.component';

describe('CreateSoutenanceComponent', () => {
  let component: SoutenanceFormComponent;
  let fixture: ComponentFixture<SoutenanceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoutenanceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoutenanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
