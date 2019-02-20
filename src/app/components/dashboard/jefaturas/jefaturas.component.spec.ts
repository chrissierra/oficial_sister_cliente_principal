import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JefaturasComponent } from './jefaturas.component';

describe('JefaturasComponent', () => {
  let component: JefaturasComponent;
  let fixture: ComponentFixture<JefaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JefaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JefaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
