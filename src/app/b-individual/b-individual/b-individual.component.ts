import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b-individual',
  templateUrl: './b-individual.component.html',
  styleUrls: ['./b-individual.component.scss']
})
export class BIndividualComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigate(link){
    this.router.navigateByUrl("bIndividual/"+link)
  }

}
