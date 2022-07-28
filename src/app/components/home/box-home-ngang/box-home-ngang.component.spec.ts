import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxHomeNgangComponent } from './box-home-ngang.component';

describe('BoxHomeNgangComponent', () => {
  let component: BoxHomeNgangComponent;
  let fixture: ComponentFixture<BoxHomeNgangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxHomeNgangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxHomeNgangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
