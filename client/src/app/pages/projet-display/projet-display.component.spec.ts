import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetDisplayComponent } from './projet-display.component';

describe('ProjetDisplayComponent', () => {
  let component: ProjetDisplayComponent;
  let fixture: ComponentFixture<ProjetDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
