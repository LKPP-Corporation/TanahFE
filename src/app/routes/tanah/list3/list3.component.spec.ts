import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanahList3Component } from './list3.component';

describe('TanahList3Component', () => {
  let component: TanahList3Component;
  let fixture: ComponentFixture<TanahList3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TanahList3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanahList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
