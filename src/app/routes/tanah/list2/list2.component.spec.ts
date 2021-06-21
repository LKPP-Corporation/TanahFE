import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanahList2Component } from './list2.component';

describe('TanahList2Component', () => {
  let component: TanahList2Component;
  let fixture: ComponentFixture<TanahList2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TanahList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanahList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
