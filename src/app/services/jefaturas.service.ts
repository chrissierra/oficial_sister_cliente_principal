import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutasservidorService } from './rutasservidor.service';
@Injectable({
  providedIn: 'root'
})
export class JefaturasService {

  constructor(	private http: HttpClient,
  				private rutasService_: RutasservidorService) { }

      AddJefatura(data){
  	return this.http.post(this.rutasService_.rutas['ingresarjefaturas'], JSON.stringify(data));  
  }

    getJefatura(data){
  	return this.http.post(this.rutasService_.rutas['getjefaturas'], JSON.stringify(data));  
  }


    updateJefatura(data){
  	return this.http.post(this.rutasService_.rutas['actualizarjefaturas'], JSON.stringify(data));  
  }



    deleteJefatura(data){
  	return this.http.post(this.rutasService_.rutas['deletejefaturas'], JSON.stringify(data));  
  }


}
