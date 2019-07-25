import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MensajesSwalService } from '../../../services/mensajes-swal.service';
import { Store } from '@ngrx/store';
import * as fromMarcaje from '../../marcaje.actions';
import { AppState } from '../../../app.reducers';
@Component({
  selector: 'app-importacion',
  templateUrl: './importacion.component.html',
  styleUrls: ['./importacion.component.css']
})
export class ImportacionComponent implements OnInit {
	 public url:any = "https://sister.cl/laravel/index.php/api/importacion_trabajadores";
	 public selectedFile:any;
	 public boleanoLoader:any= false;
	 public urlVolver:any;
  constructor(private MensajesSwalService_: MensajesSwalService,
              public http: HttpClient,
              private param: ActivatedRoute,// hzxh 24
              private router: Router,
              private store: Store<AppState>) { }

  ngOnInit() {
  }

  onFileChanged(event: any) {
	    
	        this.selectedFile = event.target.files[0];

	        const formData = new FormData();

	        formData.append('filename', this.selectedFile);

	        formData.append('name', 'Archivo')

	        formData.append('nombre_empresa', localStorage.getItem('nombre_empresa'))
	        
    	    formData.append('rut_empresa', localStorage.getItem('rut_empresa'))


	        this.http.post(this.url, formData, {
	            reportProgress: true,
	            observe: 'events'
	        }).subscribe(event => {

	        	this.boleanoLoader=true;
	            
	            console.log(event)	       
	          
	        }, (error) => {

	          console.log(error)
	          
	          this.MensajesSwalService_.mensajeStandar({
	                        titulo:'Error en envío',
	                        texto:'La fotografía no pudo ser procesada. Repite la operación. Si persiste avísanos.',
	                        tipo:'error',
	                        boton:'Ok'
	                              });

	        
	        }, ()=> {


	        	  this.MensajesSwalService_.mensajeStandar({
	                        titulo:'Envío Realizado',
	                        texto:'La fotografía se actualizó correctamente.',
	                        tipo:'success',
	                        boton:'Ok'
	                              });

	        	this.boleanoLoader=false;

	        
	        });
	  
	} // Fin OnfileChanged

}
