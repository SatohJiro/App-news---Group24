import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VipNewsComponent} from './vip-news.component';

describe('VipNewsComponent', () => {
  let component: VipNewsComponent;
  let fixture: ComponentFixture<VipNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VipNewsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VipNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
