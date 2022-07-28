import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNewsItemComponent } from './box-news-item.component';

describe('BoxNewsItemComponent', () => {
  let component: BoxNewsItemComponent;
  let fixture: ComponentFixture<BoxNewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxNewsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
