import { Component, OnInit } from '@angular/core';

import {Persona} from '../persona';

@Component({
  selector: 'app-practica1',
  templateUrl: './practica1.component.html',
  styleUrls: ['./practica1.component.css']
})

export class Practica1Component implements OnInit {
  per=new Persona();

  constructor() { 
    this.per.setNombre("Angel");
    this.per.setApellido("Zapata Davila");
    this.per.setEdad(20);
    this.per.setSexo("Hombre");
  }

  ngOnInit(): void {
  }

}
