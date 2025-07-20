import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LEGUMESPage } from './legumes.page';

describe('LEGUMESPage', () => {
  let component: LEGUMESPage;
  let fixture: ComponentFixture<LEGUMESPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LEGUMESPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
