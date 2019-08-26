import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  tipo: String
  maquinarias: [
    {
      id,
      maq_anio,
      maq_modelo,
      maq_tipo,
      maq_cantidad

    }
  ]

  constructor(private ruta: ActivatedRoute,private router:Router) {
    var rutaActual = ruta.snapshot.params.tipo;
    
    var i = 0;
    this.tipo = rutaActual
    if(this.tipo==="cliente"||this.tipo==="proveedor"){
      
    }else{
      this.router.navigateByUrl('/')
    }
    console.log(this.tipo)
    this.maquinarias = [
      {
        id: i,
        maq_anio:2019,
        maq_modelo:"nose",
        maq_tipo:"excavadora",
        maq_cantidad:1
      }
    ]
    console.log(this.maquinarias)
  }

  ngOnInit() {
  }
  agregarMaquinaria(){
    var i=1;
    this.maquinarias.push({
        id: i,
        maq_anio:2019,
        maq_modelo:"nose",
        maq_tipo:"excavadora",
        maq_cantidad:1
    })
  }

}
