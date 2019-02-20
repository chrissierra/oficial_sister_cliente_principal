import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutasservidorService } from './rutasservidor.service';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(		private http: HttpClient,
  				    private rutasService_: RutasservidorService) { }

      Add(data, ruta){
  	return this.http.post(this.rutasService_.rutas[ruta], JSON.stringify(data));  
  }

    get(data, ruta){
  	return this.http.post(this.rutasService_.rutas[ruta], JSON.stringify(data));  
  }


    update(data, ruta){
  	return this.http.post(this.rutasService_.rutas[ruta], JSON.stringify(data));  
  }



    delete(data, ruta){
  	return this.http.post(this.rutasService_.rutas[ruta], JSON.stringify(data));  
  }
}
