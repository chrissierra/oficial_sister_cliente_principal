import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutasservidorService } from './rutasservidor.service';
@Injectable()
export class MandantesService {

  constructor(	 private http: HttpClient,
  				 private rutasService_: RutasservidorService) { }


  AddMandante(data){
  	return this.http.post(this.rutasService_.rutas['ingresarMandante'], JSON.stringify(data));  
  }

    getMandante(data){
  	return this.http.post(this.rutasService_.rutas['getMandante'], JSON.stringify(data));  
  }


    updateMandante(data){
  	return this.http.post(this.rutasService_.rutas['actualizarMandante'], JSON.stringify(data));  
  }



    deleteMandante(data){
  	return this.http.post(this.rutasService_.rutas['deleteMandante'], JSON.stringify(data));  
  }

}
