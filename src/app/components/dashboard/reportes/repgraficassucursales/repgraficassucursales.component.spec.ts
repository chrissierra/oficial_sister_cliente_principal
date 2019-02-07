import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepgraficassucursalesComponent } from './repgraficassucursales.component';

describe('RepgraficassucursalesComponent', () => {
  let component: RepgraficassucursalesComponent;
  let fixture: ComponentFixture<RepgraficassucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepgraficassucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepgraficassucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
