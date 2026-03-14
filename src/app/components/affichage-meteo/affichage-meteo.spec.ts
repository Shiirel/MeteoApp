import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageMeteo } from './affichage-meteo';

describe('AffichageMeteo', () => {
  let component: AffichageMeteo;
  let fixture: ComponentFixture<AffichageMeteo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffichageMeteo],
    }).compileComponents();

    fixture = TestBed.createComponent(AffichageMeteo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
