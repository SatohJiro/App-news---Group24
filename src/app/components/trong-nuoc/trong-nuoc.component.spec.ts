import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrongNuocComponent } from './trong-nuoc.component';

describe('TrongNuocComponent', () => {
  let component: TrongNuocComponent;
  let fixture: ComponentFixture<TrongNuocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrongNuocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrongNuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
