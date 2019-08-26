import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquileresActivosComponent } from './alquileres-activos.component';

describe('AlquileresActivosComponent', () => {
  let component: AlquileresActivosComponent;
  let fixture: ComponentFixture<AlquileresActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquileresActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquileresActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
