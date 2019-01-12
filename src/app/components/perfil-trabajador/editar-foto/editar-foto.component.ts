import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import * as fromMarcaje from '../../marcaje.actions';
import { AppState } from '../../../app.reducers';
import { RutasservidorService } from "./../../../services/rutasservidor.service";
@Component({
  selector: 'app-editar-foto',
  templateUrl: './editar-foto.component.html',
  styleUrls: ['./editar-foto.component.css']
})
export class EditarFotoComponent   {
	public url:any;
  public url_regreso:any='../Planilla/';
  constructor(public RutasservidorService_: RutasservidorService,
              private store: Store<AppState>,
              private param: ActivatedRoute,
              private router: Router) { 

    console.log( this.param.snapshot.paramMap.get('rut'))
  	  	this.url =  this.RutasservidorService_.rutas['recepcionimagen1v1']+"?rut=" + this.param.snapshot.paramMap.get('rut');

        const accion = new fromMarcaje.ACTUALIZARURLAction(this.url);
        this.store.dispatch( accion );

        const accion1 = new fromMarcaje.ACTUALIZARURL1Action('../Planilla/');
        this.store.dispatch( accion1 );
  	  	
  }


  
}
