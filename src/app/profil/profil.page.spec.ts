import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PROFILPage } from './profil.page';

describe('PROFILPage', () => {
  let component: PROFILPage;
  let fixture: ComponentFixture<PROFILPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PROFILPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
