import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoDirtComponent } from './corpo-dirt.component';

describe('CorpoDirtComponent', () => {
  let component: CorpoDirtComponent;
  let fixture: ComponentFixture<CorpoDirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpoDirtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoDirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
