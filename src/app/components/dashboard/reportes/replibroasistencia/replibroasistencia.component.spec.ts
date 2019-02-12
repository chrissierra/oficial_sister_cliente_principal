import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplibroasistenciaComponent } from './replibroasistencia.component';

describe('ReplibroasistenciaComponent', () => {
  let component: ReplibroasistenciaComponent;
  let fixture: ComponentFixture<ReplibroasistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplibroasistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplibroasistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
