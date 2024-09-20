import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersFunnelsComponent } from './filters-funnels.component';

describe('FiltersFunnelsComponent', () => {
  let component: FiltersFunnelsComponent;
  let fixture: ComponentFixture<FiltersFunnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersFunnelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersFunnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
