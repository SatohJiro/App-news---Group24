import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BoxSameCategoryNewsComponent} from './box-same-category-news.component';

describe('BoxSameCategoryNewsComponent', () => {
  let component: BoxSameCategoryNewsComponent;
  let fixture: ComponentFixture<BoxSameCategoryNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxSameCategoryNewsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSameCategoryNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
