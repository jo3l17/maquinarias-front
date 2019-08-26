import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-pesado',
  templateUrl: './e-pesado.component.html',
  styleUrls: ['./e-pesado.component.scss']
})
export class EPesadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    return value;
  }
}
