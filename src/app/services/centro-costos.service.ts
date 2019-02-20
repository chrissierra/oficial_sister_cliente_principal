import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutasservidorService } from './rutasservidor.service';
@Injectable({
  providedIn: 'root'
})
export class CentroCostosService {

  constructor(	private http: HttpClient,
  				private rutasService_: RutasservidorService) { }

      AddcentroCosto(data){
  	return this.http.post(this.rutasService_.rutas['ingresar_centrocosto'], JSON.stringify(data));  
  }

    getcentroCosto(data){
  	return this.http.post(this.rutasService_.rutas['get_centrocosto'], JSON.stringify(data));  
  }


    updatecentroCosto(data){
  	return this.http.post(this.rutasService_.rutas['actualizar_centrocosto'], JSON.stringify(data));  
  }



    deletecentroCosto(data){
  	return this.http.post(this.rutasService_.rutas['delete_centrocosto'], JSON.stringify(data));  
  }
}
