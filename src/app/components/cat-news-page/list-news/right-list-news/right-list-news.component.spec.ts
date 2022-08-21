import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightListNewsComponent } from './right-list-news.component';

describe('RightListNewsComponent', () => {
  let component: RightListNewsComponent;
  let fixture: ComponentFixture<RightListNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightListNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightListNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
