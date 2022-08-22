import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BoxNewsDetailComponent} from './box-news-detail.component';

describe('BoxNewsDetailComponent', () => {
  let component: BoxNewsDetailComponent;
  let fixture: ComponentFixture<BoxNewsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxNewsDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
