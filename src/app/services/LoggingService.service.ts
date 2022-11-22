import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService{

  enviarMensajeAConsole(mensaje:string){
  console.log(mensaje);

  }
}
