import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MensajesSwalService } from '../../../services/mensajes-swal.service';
import { Store } from '@ngrx/store';
import * as fromMarcaje from '../../marcaje.actions';
import { AppState } from '../../../app.reducers';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
 public url:any;
 public selectedFile:any;
 public boleanoLoader:any= false;
 public urlVolver:any;
  @Input() URL_REGRESO: string='';
  constructor(private MensajesSwalService_: MensajesSwalService,
              public http: HttpClient,
              private param: ActivatedRoute,// hzxh 24
              private router: Router,
              private store: Store<AppState>) { 
  	this.getFromState();
  }

  ngOnInit() {
  }



onFileChanged(event: any) {
	    
	        this.selectedFile = event.target.files[0];

	        const formData = new FormData();

	         formData.append('image', this.selectedFile);
	        
	        this.http.post(this.url, formData, {
	            reportProgress: true,
	            observe: 'events'
	        }).subscribe(event => {
	        	this.boleanoLoader=true;
	            console.log(event)
	          


	        // this.router.navigate([this.urlVolver]);
	          
	        }, (error) => {
	          console.log(error)
	          this.MensajesSwalService_.mensajeStandar({
	                        titulo:'Error en envío',
	                        texto:'La fotografía no pudo ser procesada. Repite la operación. Si persiste avísanos.',
	                        tipo:'error',
	                        boton:'Ok'
	                              });

	          
	         //this.router.navigate([this.urlVolver]);
	        }, ()=> {

	        	  this.MensajesSwalService_.mensajeStandar({
	                        titulo:'Envío Realizado',
	                        texto:'La fotografía se actualizó correctamente.',
	                        tipo:'success',
	                        boton:'Ok'
	                              });
	        	this.boleanoLoader=false;
	          	if(this.URL_REGRESO.length > 0){
	            	 this.router.navigate([this.URL_REGRESO]);
	            }
	        
	        });
	  
	} // Fin OnfileChanged



       getFromState(){
            this.store.select('marcaje')
          .subscribe( marcaje  => {       
               this.url = marcaje.url;
               this.urlVolver = marcaje.url1;
          });
      } // Fin getFromState


} //** Fin Clase
