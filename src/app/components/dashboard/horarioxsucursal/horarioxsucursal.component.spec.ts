import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioxsucursalComponent } from './horarioxsucursal.component';

describe('HorarioxsucursalComponent', () => {
  let component: HorarioxsucursalComponent;
  let fixture: ComponentFixture<HorarioxsucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioxsucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioxsucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
