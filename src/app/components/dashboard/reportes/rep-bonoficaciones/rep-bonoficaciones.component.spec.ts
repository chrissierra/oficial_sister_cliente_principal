import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepBonoficacionesComponent } from './rep-bonoficaciones.component';

describe('RepBonoficacionesComponent', () => {
  let component: RepBonoficacionesComponent;
  let fixture: ComponentFixture<RepBonoficacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepBonoficacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepBonoficacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
