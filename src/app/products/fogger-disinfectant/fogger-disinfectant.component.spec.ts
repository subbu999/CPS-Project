import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoggerDisinfectantComponent } from './fogger-disinfectant.component';

describe('FoggerDisinfectantComponent', () => {
  let component: FoggerDisinfectantComponent;
  let fixture: ComponentFixture<FoggerDisinfectantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoggerDisinfectantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoggerDisinfectantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
