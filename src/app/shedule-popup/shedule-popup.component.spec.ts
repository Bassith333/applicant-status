import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShedulePopupComponent } from './shedule-popup.component';

describe('ShedulePopupComponent', () => {
  let component: ShedulePopupComponent;
  let fixture: ComponentFixture<ShedulePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShedulePopupComponent]
    });
    fixture = TestBed.createComponent(ShedulePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
