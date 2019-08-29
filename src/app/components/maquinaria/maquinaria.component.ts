import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maquinaria',
  templateUrl: './maquinaria.component.html',
  styleUrls: ['./maquinaria.component.scss']
})
export class MaquinariaComponent implements OnInit {

  id:any;
  constructor(private ruta:ActivatedRoute) {
    var rutaActual = ruta.snapshot.params.id
    this.id=rutaActual
    console.log(rutaActual)
  }

  ngOnInit() {
  }

}
