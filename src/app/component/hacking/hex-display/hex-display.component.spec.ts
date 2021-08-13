import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexDisplayComponent } from './hex-display.component';

describe('HexDisplayComponent', () => {
  let component: HexDisplayComponent;
  let fixture: ComponentFixture<HexDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
