import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutasservidorService } from './rutasservidor.service';
@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(	private http: HttpClient,
  				private rutasService_: RutasservidorService) { }

      AddDepartamento(data){
  	return this.http.post(this.rutasService_.rutas['ingresardepartamento'], JSON.stringify(data));  
  }

    getDepartamento(data){
  	return this.http.post(this.rutasService_.rutas['getdepartamento'], JSON.stringify(data));  
  }


    updateDepartamento(data){
  	return this.http.post(this.rutasService_.rutas['actualizardepartamento'], JSON.stringify(data));  
  }



    deleteDepartamento(data){
  	return this.http.post(this.rutasService_.rutas['deletedepartamento'], JSON.stringify(data));  
  }


}
