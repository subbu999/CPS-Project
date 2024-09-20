import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StainlessSteelComponent } from './stainless-steel.component';

describe('StainlessSteelComponent', () => {
  let component: StainlessSteelComponent;
  let fixture: ComponentFixture<StainlessSteelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StainlessSteelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StainlessSteelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
