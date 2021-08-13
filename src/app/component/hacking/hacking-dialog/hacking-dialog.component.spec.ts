import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackingDialogComponent } from './hacking-dialog.component';

describe('HackingDialogComponent', () => {
  let component: HackingDialogComponent;
  let fixture: ComponentFixture<HackingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
