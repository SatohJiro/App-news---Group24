import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemNewsComponent } from './category-item-news.component';

describe('CategoryItemNewsComponent', () => {
  let component: CategoryItemNewsComponent;
  let fixture: ComponentFixture<CategoryItemNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryItemNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryItemNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
