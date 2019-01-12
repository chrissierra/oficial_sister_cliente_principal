import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutasservidorService } from './rutasservidor.service';
@Injectable()
export class CargosService {

  constructor(	 private http: HttpClient,
  				 private rutasService_: RutasservidorService) { }


    AddCargo(data){
  	return this.http.post(this.rutasService_.rutas['ingresarCargo'], JSON.stringify(data));  
  }

    getCargo(data){
  	return this.http.post(this.rutasService_.rutas['getCargos'], JSON.stringify(data));  
  }


    updateCargo(data){
  	return this.http.post(this.rutasService_.rutas['actualizarCargo'], JSON.stringify(data));  
  }



    deleteCargo(data){
  	return this.http.post(this.rutasService_.rutas['deleteCargos'], JSON.stringify(data));  
  }
}
