import { Component, OnInit } from '@angular/core';
import { Persona } from './models/persona';
import { LoggingService } from './services/LoggingService.service';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas: Persona[] = [];


  constructor(private _logginService: LoggingService, private _personasService: PersonasService) {

  }
  ngOnInit(): void {
   this.personas = this._personasService.personas;

  }



}
