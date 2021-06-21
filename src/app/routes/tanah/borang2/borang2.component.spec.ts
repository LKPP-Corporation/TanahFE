import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanahBorang2Component } from './borang2.component';

describe('TanahBorang2Component', () => {
  let component: TanahBorang2Component;
  let fixture: ComponentFixture<TanahBorang2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TanahBorang2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanahBorang2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
