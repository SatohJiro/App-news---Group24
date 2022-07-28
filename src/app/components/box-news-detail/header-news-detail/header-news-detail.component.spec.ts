import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNewsDetailComponent } from './header-news-detail.component';

describe('HeaderNewsDetailComponent', () => {
  let component: HeaderNewsDetailComponent;
  let fixture: ComponentFixture<HeaderNewsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNewsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
