import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsidePopupComponent } from './inside-popup.component';

describe('InsidePopupComponent', () => {
  let component: InsidePopupComponent;
  let fixture: ComponentFixture<InsidePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsidePopupComponent]
    });
    fixture = TestBed.createComponent(InsidePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
