import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BOISSONSPage } from './boissons.page';

describe('BOISSONSPage', () => {
  let component: BOISSONSPage;
  let fixture: ComponentFixture<BOISSONSPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BOISSONSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
