import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RedirectDetailComponent} from './redirect-detail.component';

describe('RedirectDetailComponent', () => {
  let component: RedirectDetailComponent;
  let fixture: ComponentFixture<RedirectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedirectDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
