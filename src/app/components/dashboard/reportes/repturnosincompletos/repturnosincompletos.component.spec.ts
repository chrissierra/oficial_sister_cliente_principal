import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepturnosincompletosComponent } from './repturnosincompletos.component';

describe('RepturnosincompletosComponent', () => {
  let component: RepturnosincompletosComponent;
  let fixture: ComponentFixture<RepturnosincompletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepturnosincompletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepturnosincompletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
