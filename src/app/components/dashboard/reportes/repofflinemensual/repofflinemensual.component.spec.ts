import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepofflinemensualComponent } from './repofflinemensual.component';

describe('RepofflinemensualComponent', () => {
  let component: RepofflinemensualComponent;
  let fixture: ComponentFixture<RepofflinemensualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepofflinemensualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepofflinemensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
