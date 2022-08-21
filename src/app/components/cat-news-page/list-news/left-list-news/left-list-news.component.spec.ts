import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftListNewsComponent } from './left-list-news.component';

describe('LeftListNewsComponent', () => {
  let component: LeftListNewsComponent;
  let fixture: ComponentFixture<LeftListNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftListNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftListNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
