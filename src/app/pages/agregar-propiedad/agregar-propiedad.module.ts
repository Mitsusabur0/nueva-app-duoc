import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPropiedadPageRoutingModule } from './agregar-propiedad-routing.module';

import { AgregarPropiedadPage } from './agregar-propiedad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPropiedadPageRoutingModule
  ],
  declarations: [AgregarPropiedadPage]
})
export class AgregarPropiedadPageModule {}
