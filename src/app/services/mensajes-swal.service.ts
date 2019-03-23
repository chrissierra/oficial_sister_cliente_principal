import { Injectable } from '@angular/core';
import swal from 'sweetalert2'

@Injectable()
export class MensajesSwalService {

  constructor() { }


     public mensajeStandar(mensaje: TipoMensaje){
       swal({
          title: mensaje.titulo,
          text: mensaje.texto,
          type: mensaje.tipo,
          confirmButtonText: mensaje.boton
        })
   } // Fin funcion mensajeError

      public mensajePromesa(titulo, texto, tipo, texto_boton_promesa_añadida){
          return  swal({
                  title: titulo,
                  text: texto,
                  type: tipo,
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  cancelButtonText: 'Cancelar',
                  confirmButtonText: texto_boton_promesa_añadida
                })
   } // Fin funcion mensajepromesa

      public error(){
      this.mensajeStandar({
        titulo:'Error',
        texto: 'Debes marcar todos los campos necesarios para tu consulta. También es posible que no hayan datos para tu consulta. Verifícalo',
        tipo: 'error',
        boton: 'Ok'
      })
    }

}


export interface TipoMensaje {

	titulo: string;
	texto: string;
	tipo: any;
	boton: string;

}