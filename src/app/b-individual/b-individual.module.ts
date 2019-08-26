import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BIndividualComponent } from './b-individual/b-individual.component';
import { EPesadoComponent } from './e-pesado/e-pesado.component';
import { ECargaComponent } from './e-carga/e-carga.component';
import { ELivianoComponent } from './e-liviano/e-liviano.component';
import { TPersonalComponent } from './t-personal/t-personal.component';
import { BIndividualRoutingModule } from './b.individual-routing.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [BIndividualComponent, EPesadoComponent, ECargaComponent, ELivianoComponent, TPersonalComponent],
  imports: [
    CommonModule,
    BIndividualRoutingModule,
    MaterialModule
  ]
})
export class BIndividualModule { }
