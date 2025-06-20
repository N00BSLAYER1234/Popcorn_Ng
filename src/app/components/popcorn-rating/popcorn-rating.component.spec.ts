import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopcornRatingComponent } from './popcorn-rating.component';

describe('PopcornRatingComponent', () => {
  let component: PopcornRatingComponent;
  let fixture: ComponentFixture<PopcornRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopcornRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopcornRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
