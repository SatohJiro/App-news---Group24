import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNewsContentComponent } from './box-news-content.component';

describe('BoxNewsContentComponent', () => {
  let component: BoxNewsContentComponent;
  let fixture: ComponentFixture<BoxNewsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxNewsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxNewsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
