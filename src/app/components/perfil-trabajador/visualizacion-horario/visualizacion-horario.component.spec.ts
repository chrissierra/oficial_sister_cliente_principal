import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionHorarioComponent } from './visualizacion-horario.component';

describe('VisualizacionHorarioComponent', () => {
  let component: VisualizacionHorarioComponent;
  let fixture: ComponentFixture<VisualizacionHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizacionHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
