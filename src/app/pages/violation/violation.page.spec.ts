import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViolationPage } from './violation.page';

describe('ViolationPage', () => {
  let component: ViolationPage;
  let fixture: ComponentFixture<ViolationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViolationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
