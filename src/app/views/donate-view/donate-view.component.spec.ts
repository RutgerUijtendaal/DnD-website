import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateViewComponent } from './donate-view.component';

describe('DonateViewComponent', () => {
  let component: DonateViewComponent;
  let fixture: ComponentFixture<DonateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
