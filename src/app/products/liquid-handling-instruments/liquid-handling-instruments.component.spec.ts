import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidHandlingInstrumentsComponent } from './liquid-handling-instruments.component';

describe('LiquidHandlingInstrumentsComponent', () => {
  let component: LiquidHandlingInstrumentsComponent;
  let fixture: ComponentFixture<LiquidHandlingInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidHandlingInstrumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiquidHandlingInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
