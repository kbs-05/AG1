import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CONNEXIONPage } from './connexion.page';

describe('CONNEXIONPage', () => {
  let component: CONNEXIONPage;
  let fixture: ComponentFixture<CONNEXIONPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CONNEXIONPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
