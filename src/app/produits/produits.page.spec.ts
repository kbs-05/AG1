import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PRODUITSPage } from './produits.page';

describe('PRODUITSPage', () => {
  let component: PRODUITSPage;
  let fixture: ComponentFixture<PRODUITSPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PRODUITSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
