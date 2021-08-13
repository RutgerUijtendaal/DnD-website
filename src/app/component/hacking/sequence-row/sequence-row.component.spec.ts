import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceRowComponent } from './sequence-row.component';

describe('SequenceRowComponent', () => {
  let component: SequenceRowComponent;
  let fixture: ComponentFixture<SequenceRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequenceRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
