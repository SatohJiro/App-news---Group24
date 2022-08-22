import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BoxCateHomeComponent} from './box-cate-home.component';

describe('BoxCateHomeComponent', () => {
  let component: BoxCateHomeComponent;
  let fixture: ComponentFixture<BoxCateHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxCateHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
