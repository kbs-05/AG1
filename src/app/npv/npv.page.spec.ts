import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NPVPage } from './npv.page';

describe('NPVPage', () => {
  let component: NPVPage;
  let fixture: ComponentFixture<NPVPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NPVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
