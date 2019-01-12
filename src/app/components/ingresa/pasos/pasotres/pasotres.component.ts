import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { RutasservidorService } from "../../../../services/rutasservidor.service";
import { Store } from '@ngrx/store';
import * as fromMarcaje from '../../../marcaje.actions';
import { AppState } from '../../../../app.reducers';
@Component({
  selector: 'app-pasotres',
  templateUrl: './pasotres.component.html'
})
export class PasotresComponent   {
	public url:any;
  public url_regreso:any ='../Planilla/';
  constructor(private store: Store<AppState>,
              public RutasservidorService_: RutasservidorService,
              private param: ActivatedRoute,
              private router: Router) { 
  	  	this.url = this.RutasservidorService_.rutas['recepcionimagen1v1']+ "?rut=" + this.param.snapshot.paramMap.get('rut');

        const accion = new fromMarcaje.ACTUALIZARURLAction(this.url);
        this.store.dispatch( accion );
  	  	
  }


  onUploadFinished(file) {
  console.log(file);
  console.log("Tamaño de la foto...", file.file.size);

  if(file.file.size > 400000){
      this.mensajeError();
      
  }else{
      this.mensaje();
      this.router.navigate(['../Planilla/']);
  }


}

onRemoved(file) {
  console.log(file);
}

onUploadStateChanged(state: boolean) {
  console.log(state);
}



 public mensaje(){
       swal({
          title: 'Proceso Exitoso',
          text: 'Se ingresó correctamente al trabajador',
          type: 'success',
          confirmButtonText: 'Ok'
        })
   }


    public mensajeError(){
       swal({
          title: 'Imagen muy pesada',
          text: 'La imagen debe pesar como máximo 400 KB. Reducir el tamaño ayuda también a que sea mas liviana.',
          type: 'error',
          confirmButtonText: 'Ok'
        })
   }
}
