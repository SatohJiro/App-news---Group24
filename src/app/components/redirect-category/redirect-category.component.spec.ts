import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectCategoryComponent } from './redirect-category.component';

describe('RedirectCategoryComponent', () => {
  let component: RedirectCategoryComponent;
  let fixture: ComponentFixture<RedirectCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
