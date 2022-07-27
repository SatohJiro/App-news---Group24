import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxListNewsComponent } from './box-list-news.component';

describe('BoxListNewsComponent', () => {
  let component: BoxListNewsComponent;
  let fixture: ComponentFixture<BoxListNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxListNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxListNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
