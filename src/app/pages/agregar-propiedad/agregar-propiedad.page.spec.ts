import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarPropiedadPage } from './agregar-propiedad.page';

describe('AgregarPropiedadPage', () => {
  let component: AgregarPropiedadPage;
  let fixture: ComponentFixture<AgregarPropiedadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarPropiedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
