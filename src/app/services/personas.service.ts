import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { LoggingService } from './LoggingService.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas: Persona[] = [new Persona("Luis", "Montalban"), new Persona("Betzabet", "Villarroel")];

  saludar = new EventEmitter<number>();

  constructor(private _loggingservice: LoggingService) {

  }

  agregarPersona(persona: Persona){
  this._loggingservice.enviarMensajeAConsole("Agregamos a la persona: " + persona.nombre);
  this.personas.push(persona);

  }

}
