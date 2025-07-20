import { ComponentFixture, TestBed } from '@angular/core/testing';
import { POISSONPage } from './poisson.page';

describe('POISSONPage', () => {
  let component: POISSONPage;
  let fixture: ComponentFixture<POISSONPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(POISSONPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
