
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BIndividualComponent } from './b-individual/b-individual.component';
import { ECargaComponent } from './e-carga/e-carga.component';
import { ELivianoComponent } from './e-liviano/e-liviano.component';
import { EPesadoComponent } from './e-pesado/e-pesado.component';
import { TPersonalComponent } from './t-personal/t-personal.component';

const routes: Routes = [
    {
        path: 'bIndividual',
        component: BIndividualComponent,
        children: [
            {
                path: 'carga',
                component: ECargaComponent
            },
            {
                path: 'pesado',
                component: EPesadoComponent
            },
            {
                path: 'personal',
                component: TPersonalComponent
            },
            {
                path: 'liviano',
                component: ELivianoComponent
            }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BIndividualRoutingModule { }