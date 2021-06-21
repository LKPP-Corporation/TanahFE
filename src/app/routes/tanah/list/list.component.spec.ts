import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanahListComponent } from './list.component';

describe('TanahListComponent', () => {
  let component: TanahListComponent;
  let fixture: ComponentFixture<TanahListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TanahListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanahListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
