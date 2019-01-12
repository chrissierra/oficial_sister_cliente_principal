import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RutasservidorService } from './rutasservidor.service';
@Injectable()
export class DesvinculacionService {

  constructor(	 private http: HttpClient,
  				 private rutasService_: RutasservidorService) { }



    desvincular(data){
  	return this.http.post(this.rutasService_.rutas['desvincular'], JSON.stringify(data));  
  }

}
