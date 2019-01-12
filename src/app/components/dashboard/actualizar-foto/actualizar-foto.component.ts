import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MensajesSwalService } from '../../../services/mensajes-swal.service';
import { Store } from '@ngrx/store';
import * as fromMarcaje from '../../marcaje.actions';
import { AppState } from '../../../app.reducers';
import { RutasservidorService } from "../../../services/rutasservidor.service";
@Component({
  selector: 'app-actualizar-foto',
  templateUrl: './actualizar-foto.component.html',
  styleUrls: ['./actualizar-foto.component.css']
})
export class ActualizarFotoComponent     {
  public url:any;

  constructor(public RutasservidorService_: RutasservidorService,
              private store: Store<AppState>,
              private MensajesSwalService_: MensajesSwalService,
              public http: HttpClient,
              private param: ActivatedRoute, private router: Router) { 
  	  
      	this.url = this.RutasservidorService_.rutas['recepcionimagenclientesrrhh'] + "?rut=" + this.param.snapshot.paramMap.get('rut');
       
        const accion = new fromMarcaje.ACTUALIZARURLAction(this.url);
        this.store.dispatch( accion );

        const accion1 = new fromMarcaje.ACTUALIZARURL1Action('./Dashboard');
        this.store.dispatch( accion1 );
        
  }

}
