import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNewsComponent } from './first-news.component';

describe('FirstNewsComponent', () => {
  let component: FirstNewsComponent;
  let fixture: ComponentFixture<FirstNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
