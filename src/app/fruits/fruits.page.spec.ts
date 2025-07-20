import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FRUITSPage } from './fruits.page';

describe('FRUITSPage', () => {
  let component: FRUITSPage;
  let fixture: ComponentFixture<FRUITSPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FRUITSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
