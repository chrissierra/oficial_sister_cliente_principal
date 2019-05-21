import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectJefaturasComponent } from './select-jefaturas.component';

describe('SelectJefaturasComponent', () => {
  let component: SelectJefaturasComponent;
  let fixture: ComponentFixture<SelectJefaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectJefaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectJefaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
