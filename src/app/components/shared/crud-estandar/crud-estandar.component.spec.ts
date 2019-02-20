import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEstandarComponent } from './crud-estandar.component';

describe('CrudEstandarComponent', () => {
  let component: CrudEstandarComponent;
  let fixture: ComponentFixture<CrudEstandarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudEstandarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEstandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
