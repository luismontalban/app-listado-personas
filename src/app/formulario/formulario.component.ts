import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../models/persona';
import { LoggingService } from '../services/LoggingService.service';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>();

  //nombreInput: string = "";
  //apellidoInput: string = "";
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private _loggingService: LoggingService, private _personasService: PersonasService) {
    this._personasService.saludar.subscribe(
      (indice: number) => alert("el indice es: " + indice)
    );

    {

    }
  }

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    //this._loggingService.enviarMensajeAConsole("Enviamos persona:" + persona1.nombre + " " + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this._personasService.agregarPersona(persona1);
  }

}
