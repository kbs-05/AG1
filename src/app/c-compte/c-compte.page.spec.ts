import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CCOMPTEPage } from './c-compte.page';

describe('CCOMPTEPage', () => {
  let component: CCOMPTEPage;
  let fixture: ComponentFixture<CCOMPTEPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CCOMPTEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
