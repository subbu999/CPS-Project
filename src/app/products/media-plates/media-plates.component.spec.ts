import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPlatesComponent } from './media-plates.component';

describe('MediaPlatesComponent', () => {
  let component: MediaPlatesComponent;
  let fixture: ComponentFixture<MediaPlatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaPlatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPlatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
