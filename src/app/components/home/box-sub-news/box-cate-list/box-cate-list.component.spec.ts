import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCateListComponent } from './box-cate-list.component';

describe('BoxCateListComponent', () => {
  let component: BoxCateListComponent;
  let fixture: ComponentFixture<BoxCateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
