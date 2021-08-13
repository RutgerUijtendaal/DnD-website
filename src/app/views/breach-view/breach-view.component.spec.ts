import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreachViewComponent } from './breach-view.component';

describe('BreachViewComponent', () => {
  let component: BreachViewComponent;
  let fixture: ComponentFixture<BreachViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreachViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreachViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
