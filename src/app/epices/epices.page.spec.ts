import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EPICESPage } from './epices.page';

describe('EPICESPage', () => {
  let component: EPICESPage;
  let fixture: ComponentFixture<EPICESPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EPICESPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
