import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VIANDEPage } from './viande.page';

describe('VIANDEPage', () => {
  let component: VIANDEPage;
  let fixture: ComponentFixture<VIANDEPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VIANDEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
