import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceProgressComponent } from './sequence-progress.component';

describe('SequenceProgressComponent', () => {
  let component: SequenceProgressComponent;
  let fixture: ComponentFixture<SequenceProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequenceProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
