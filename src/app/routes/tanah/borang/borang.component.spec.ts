import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanahBorangComponent } from './borang.component';

describe('TanahBorangComponent', () => {
  let component: TanahBorangComponent;
  let fixture: ComponentFixture<TanahBorangComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TanahBorangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanahBorangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
