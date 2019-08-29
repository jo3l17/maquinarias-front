import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { BMasivaComponent } from './components/b-masiva/b-masiva.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { AlquileresActivosComponent } from './components/alquileres-activos/alquileres-activos.component';
import { MaquinariaComponent } from './components/maquinaria/maquinaria.component';



const routes: Routes = [
  {
    path:'',
    component:InicioComponent
  },
  {
    path:'registro/:tipo',
    component:RegistroComponent
  },
  {
    path:'cliente',
    component:ClienteComponent
  },
  {
    path:'bMasiva',
    component:BMasivaComponent
  },
  {
    path:'cotizaciones',
    component:CotizacionesComponent
  },
  {
    path:'alquileresActivos',
    component:AlquileresActivosComponent
  },
  {
    path:'maquinaria/:id',
    component:MaquinariaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
