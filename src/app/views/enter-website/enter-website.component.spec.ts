import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterWebsiteComponent } from './enter-website.component';

describe('EnterWebsiteComponent', () => {
  let component: EnterWebsiteComponent;
  let fixture: ComponentFixture<EnterWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
