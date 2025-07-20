import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CEREALESPage } from './cereales.page';

describe('CEREALESPage', () => {
  let component: CEREALESPage;
  let fixture: ComponentFixture<CEREALESPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CEREALESPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
