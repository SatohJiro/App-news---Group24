import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCateContentComponent } from './box-cate-content.component';

describe('BoxCateContentComponent', () => {
  let component: BoxCateContentComponent;
  let fixture: ComponentFixture<BoxCateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCateContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
