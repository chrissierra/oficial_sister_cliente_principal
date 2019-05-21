import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCentroCostosComponent } from './select-centro-costos.component';

describe('SelectCentroCostosComponent', () => {
  let component: SelectCentroCostosComponent;
  let fixture: ComponentFixture<SelectCentroCostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCentroCostosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCentroCostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
