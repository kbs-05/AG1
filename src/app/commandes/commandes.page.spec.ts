import { ComponentFixture, TestBed } from '@angular/core/testing';
import { COMMANDESPage } from './commandes.page';

describe('COMMANDESPage', () => {
  let component: COMMANDESPage;
  let fixture: ComponentFixture<COMMANDESPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(COMMANDESPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
