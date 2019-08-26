import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { BMasivaComponent } from './components/b-masiva/b-masiva.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { AlquileresActivosComponent } from './components/alquileres-activos/alquileres-activos.component';
import { BIndividualModule } from './b-individual/b-individual.module';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    RegistroComponent,
    ClienteComponent,
    BMasivaComponent,
    CotizacionesComponent,
    AlquileresActivosComponent
  ],
  imports: [
    BIndividualModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: GestureConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
