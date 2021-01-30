import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SoutenanceListComponent} from './soutenance-list.component';

describe('SoutenanceListComponent', () => {
  let component: SoutenanceListComponent;
  let fixture: ComponentFixture<SoutenanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoutenanceListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoutenanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
