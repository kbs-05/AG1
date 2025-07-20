import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CLIENTSPage } from './clients.page';

describe('CLIENTSPage', () => {
  let component: CLIENTSPage;
  let fixture: ComponentFixture<CLIENTSPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CLIENTSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
