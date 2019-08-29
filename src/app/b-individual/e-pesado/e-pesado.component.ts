import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ResolveStart, Router } from '@angular/router';

@Component({
  selector: 'app-e-pesado',
  templateUrl: './e-pesado.component.html',
  styleUrls: ['./e-pesado.component.scss']
})
export class EPesadoComponent implements OnInit {
  maqTipo: any
  cargado: boolean = false;
  maqAnio: any
  maqMarca: any
  maqModelo: any
  categorias: Array<any> = []
  anios: Array<any> = []
  maquinarias: Array<any> = []
  marcas: Array<any> = []
  modelos: Array<any> = []
  categoriaId: any
  selectedMarca: boolean = false

  restart() {
    this.categorias=[]
    this.anios=[]
    this.maquinarias=[]
    this.marcas=[]
    this.modelos= []
    fetch('http://localhost:3700/api/uso/categorias/pesada').then(response => {
      return response.json()
    }).then(tipodeMaquinaria => {
      // console.log(tipodeMaquinaria.content[0].t_maqUsoTipos[0])
      tipodeMaquinaria.content[0].t_maqUsoTipos.forEach(element => {
        this.categorias.push(element.t_maqTipo.maqTipo_nom)
        // console.log(element.t_maqTipo.maqTipo_nom)
      });
    })
    fetch('http://localhost:3700/api/uso/pesada').then(response => {
      return response.json()
    }).then(maquinarias => {
      maquinarias.content.forEach(maquinaria => {
        // console.log(maquinaria)
        this.maquinarias.push(maquinaria)
        this.cargado = true;
      })
    })
  }
  constructor(private router:Router) {
    fetch('http://localhost:3700/api/uso/categorias/pesada').then(response => {
      return response.json()
    }).then(tipodeMaquinaria => {
      // console.log(tipodeMaquinaria.content[0].t_maqUsoTipos[0])
      tipodeMaquinaria.content[0].t_maqUsoTipos.forEach(element => {
        this.categorias.push(element.t_maqTipo.maqTipo_nom)
        // console.log(element.t_maqTipo.maqTipo_nom)
      });
    })
    fetch('http://localhost:3700/api/uso/pesada').then(response => {
      return response.json()
    }).then(maquinarias => {
      maquinarias.content.forEach(maquinaria => {
        // console.log(maquinaria)
        this.maquinarias.push(maquinaria)
        this.cargado = true;
      })
    })
  }
  ngOnInit() {
  }
  detallesMaquinaria(id){
    console.log(id)
    this.router.navigateByUrl("maquinaria/"+id)
  }
  select4() {
    this.cargado = false
    fetch(`http://localhost:3700/api/maquinaria/${this.categoriaId}/${this.maqAnio}/${this.maqMarca}/${this.maqModelo}`).then(response => {
      return response.json()
    }).then(respuesta => {
      this.maquinarias = []
      respuesta.content.forEach(element => {
        this.maquinarias.push(element)
      });
      this.cargado = true
    })
  }
  select3() {
    this.cargado = false
    fetch(`http://localhost:3700/api/maquinaria/${this.categoriaId}/${this.maqAnio}/${this.maqMarca}`).then(response => {
      return response.json()
    }).then(respuesta => {
      this.maquinarias = []
      respuesta.content.forEach(element => {
        this.maquinarias.push(element)
      });
      this.cargado = true
    })
    fetch(`http://localhost:3700/api/categoria/${this.categoriaId}/${this.maqAnio}/${this.maqMarca}`).then(response => {
      return response.json()
    }).then(respuesta => {
      this.modelos = []
      respuesta.content.forEach(element => {
        this.modelos.push(element.maq_modelo)
      });
      this.cargado = true
    })
  }
  select2() {
    this.cargado = false
    fetch(`http://localhost:3700/api/maquinaria/${this.categoriaId}/${this.maqAnio}`).then(response => {
      return response.json()
    }).then(respuesta => {
      this.maquinarias = []
      respuesta.content.forEach(element => {
        this.maquinarias.push(element)
      });
      this.cargado = true
    })
    fetch(`http://localhost:3700/api/categoria/${this.categoriaId}/anio/${this.maqAnio}/marca`).then(response => {
      return response.json()
    }).then(respuesta => {
      this.marcas = []
      respuesta.content.forEach(element => {
        this.marcas.push(element.maq_marca)
      });
      this.cargado = true
    })
  }
  select() {
    this.selectedMarca = false;
    this.cargado = false
    // console.log(this.maqTipo)
    fetch(`http://localhost:3700/api/categoria/${this.maqTipo}/getId`).then(response => {
      return response.json()
    }).then(respuesta => {
      this.categoriaId = respuesta.content[0].maqTipo_id;
      /*fetch(`http://localhost:3700/api/categoria/${this.categoriaId}/marca`).then(response => {
        return response.json()
      }).then(respuesta => {
        this.marcas = []
        // console.log(respuesta.content)
        respuesta.content.forEach(element => {
          this.marcas.push(element.maq_marca)
        });
        // console.log(this.maquinarias)
      })*/
      fetch(`http://localhost:3700/api/categoria/${this.categoriaId}/anio`).then(response => {
        return response.json()
      }).then(respuesta => {
        this.anios = []
        respuesta.content.forEach(element => {
          this.anios.push(element.maq_anio)
        });
      })
      this.selectedMarca = true;
      this.cargado = true;
    })
    fetch(`http://localhost:3700/api/categoria/${this.maqTipo}`).then(response => {
      return response.json()
    }).then(respuesta => {
      this.maquinarias = []
      // console.log(respuesta.content)
      respuesta.content.forEach(element => {
        this.maquinarias.push(element.t_maquinarium)
      });
      // console.log(this.maquinarias)
      this.selectedMarca = true;
      this.cargado = true;
    });
  }
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value;
  }
}
