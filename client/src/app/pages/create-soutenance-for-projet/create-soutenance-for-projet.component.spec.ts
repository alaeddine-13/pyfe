import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSoutenanceForProjetComponent } from './create-soutenance-for-projet.component';

describe('CreateSoutenanceForProjetComponent', () => {
  let component: CreateSoutenanceForProjetComponent;
  let fixture: ComponentFixture<CreateSoutenanceForProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSoutenanceForProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSoutenanceForProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
