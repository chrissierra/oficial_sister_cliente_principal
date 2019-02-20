import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosCostosComponent } from './centros-costos.component';

describe('CentrosCostosComponent', () => {
  let component: CentrosCostosComponent;
  let fixture: ComponentFixture<CentrosCostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrosCostosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosCostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
