import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private _personasService: PersonasService) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
  this._personasService.saludar.emit(this.indice);
  }

}
