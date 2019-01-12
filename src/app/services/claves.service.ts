import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RutasservidorService } from './rutasservidor.service';
@Injectable()
export class ClavesService {

  constructor(  public http: HttpClient, 
                private rutasService_: RutasservidorService) { }


   insertarClaves(data: any) {
      return this.http.post(this.rutasService_.rutas['ingresarClaves'] , JSON.stringify(data));
   } // Fin funcion insertar_usuario_datos_generales 

  updateClaves(data: any) {
    return this.http.post(this.rutasService_.rutas['updateClaves'] , JSON.stringify(data));
 } // Fin funcion insertar_usuario_datos_generales 

 getClaves(data: any) {
  return this.http.post(this.rutasService_.rutas['getClaves'] , JSON.stringify(data));
} // Fin funcion insertar_usuario_datos_generales 
   
   
}
