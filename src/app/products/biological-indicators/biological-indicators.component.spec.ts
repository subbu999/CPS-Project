import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologicalIndicatorsComponent } from './biological-indicators.component';

describe('BiologicalIndicatorsComponent', () => {
  let component: BiologicalIndicatorsComponent;
  let fixture: ComponentFixture<BiologicalIndicatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiologicalIndicatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiologicalIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
