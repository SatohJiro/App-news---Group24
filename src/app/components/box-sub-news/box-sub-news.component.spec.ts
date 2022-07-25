import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSubNewsComponent } from './box-sub-news.component';

describe('BoxSubNewsComponent', () => {
  let component: BoxSubNewsComponent;
  let fixture: ComponentFixture<BoxSubNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSubNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSubNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
