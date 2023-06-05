import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPropiedadPage } from './agregar-propiedad.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPropiedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPropiedadPageRoutingModule {}
