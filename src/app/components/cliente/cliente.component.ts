import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigate(link){
    this.router.navigateByUrl('/'+link)
  }
}
