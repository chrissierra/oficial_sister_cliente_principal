import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionDocumentacionEmpresaComponent } from './visualizacion-documentacion-empresa.component';

describe('VisualizacionDocumentacionEmpresaComponent', () => {
  let component: VisualizacionDocumentacionEmpresaComponent;
  let fixture: ComponentFixture<VisualizacionDocumentacionEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizacionDocumentacionEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionDocumentacionEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
