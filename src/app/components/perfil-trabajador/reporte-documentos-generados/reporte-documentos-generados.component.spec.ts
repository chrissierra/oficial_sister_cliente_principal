import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteDocumentosGeneradosComponent } from './reporte-documentos-generados.component';

describe('ReporteDocumentosGeneradosComponent', () => {
  let component: ReporteDocumentosGeneradosComponent;
  let fixture: ComponentFixture<ReporteDocumentosGeneradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDocumentosGeneradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteDocumentosGeneradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
