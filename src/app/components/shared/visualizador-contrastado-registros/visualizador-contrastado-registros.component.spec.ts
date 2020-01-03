import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizadorContrastadoRegistrosComponent } from './visualizador-contrastado-registros.component';

describe('VisualizadorContrastadoRegistrosComponent', () => {
  let component: VisualizadorContrastadoRegistrosComponent;
  let fixture: ComponentFixture<VisualizadorContrastadoRegistrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizadorContrastadoRegistrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizadorContrastadoRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
