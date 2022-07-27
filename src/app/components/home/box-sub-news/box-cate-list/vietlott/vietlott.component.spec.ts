import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VietlottComponent } from './vietlott.component';

describe('VietlottComponent', () => {
  let component: VietlottComponent;
  let fixture: ComponentFixture<VietlottComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VietlottComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VietlottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
