import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLocationsComponent } from './box-locations.component';

describe('BoxLocationsComponent', () => {
  let component: BoxLocationsComponent;
  let fixture: ComponentFixture<BoxLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
