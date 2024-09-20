import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepyrogenatedTipsTubesComponent } from './depyrogenated-tips-tubes.component';

describe('DepyrogenatedTipsTubesComponent', () => {
  let component: DepyrogenatedTipsTubesComponent;
  let fixture: ComponentFixture<DepyrogenatedTipsTubesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepyrogenatedTipsTubesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepyrogenatedTipsTubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
