import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNewsPageComponent } from './cat-news-page.component';

describe('CatNewsPageComponent', () => {
  let component: CatNewsPageComponent;
  let fixture: ComponentFixture<CatNewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatNewsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
