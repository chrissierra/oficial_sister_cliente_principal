import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionContrastadaComponent } from './visualizacion-contrastada.component';

describe('VisualizacionContrastadaComponent', () => {
  let component: VisualizacionContrastadaComponent;
  let fixture: ComponentFixture<VisualizacionContrastadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizacionContrastadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionContrastadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
