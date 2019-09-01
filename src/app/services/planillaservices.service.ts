import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutasservidorService } from './rutasservidor.service';


@Injectable()
export class PlanillaservicesService {

  constructor(private http: HttpClient, private rutasService_: RutasservidorService) { }

  obtener_planilla(nombre_empresa) {

    return this.http.get(this.rutasService_.rutas['planilla'] + nombre_empresa);
  }

    obtener_postulantes(datos) {

    return this.http.post(this.rutasService_.rutas['getPostulantes'],   JSON.stringify(datos));
  }


    obtener_planilla_completa(datos) {

    return this.http.post(this.rutasService_.rutas['getTodos'] ,  JSON.stringify(datos));
  }

}
