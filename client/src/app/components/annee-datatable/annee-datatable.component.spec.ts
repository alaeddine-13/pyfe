import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneeDatatableComponent } from './annee-datatable.component';

describe('AnneeDatatableComponent', () => {
  let component: AnneeDatatableComponent;
  let fixture: ComponentFixture<AnneeDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnneeDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnneeDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
