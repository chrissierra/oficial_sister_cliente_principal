import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { GeneradorDocumentosService } from '../../../services/generador-documentos.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-reporte-documentos-generados',
  templateUrl: './reporte-documentos-generados.component.html',
  styleUrls: ['./reporte-documentos-generados.component.css']
})
export class ReporteDocumentosGeneradosComponent implements OnInit {
	id:any;
	imagen64:any;
	resultData:any;
  rutEmpresa:any;
  constructor(	private sanitizer: DomSanitizer,
                private param: ActivatedRoute,
                private router: Router,
                private GeneradorDocumentosService_: GeneradorDocumentosService,
  				      private CrudService_: CrudService) { }

  ngOnInit() {
         this.rutEmpresa = localStorage.getItem('rut_empresa')
  	    this.id =  this.param.parent.snapshot.paramMap.get('id'); 
        //alert(this.id)   
  	  	this.CrudService_.get({'trabajador_id':this.id, 'rut_empresa': localStorage.getItem('rut_empresa')  }, 'GetDocumentoPorTrabajador')
		  	.subscribe((data:any) => {
		  		//console.log(data.response)
		  		console.log(data)
		  		this.imagen64 = data.image64
		  		this.resultData = data.response;
		  		console.log(data)
		})

  }

    refrescarIframe(item){
            this.CrudService_.Add({'cuerpoDocumento': item.CuerpoDocumento, 'rutEmpresa': localStorage.getItem('rut_empresa')}, 'armarDocumento')
    .subscribe(data => console.log(data), (err)=> console.log(err),
      ()=> {
        setTimeout(()=> {
          // this.URL_IFRAME = this.sanitizer.bypassSecurityTrustResourceUrl('https://sister.cl/laravel/index.php/presta/'+this.rutEmpresa);
          location.href = 'https://sister.cl/laravel/index.php/presta/'+this.rutEmpresa;
        }, 3000)

      })
  }


  visualizarPDF(item){

  	console.log("ITEM", item)

    if(item.tipocarta == 1){
        let nombre = JSON.parse(localStorage.getItem('TrabajadorSeleccionadoPerfil'))
        this.GeneradorDocumentosService_.generarPDFDocumentoFromServerTipoCarta(item, this.imagen64, item.ciudad, nombre.nombre,nombre.apellido, nombre.rut);

    }else{
        
        this.GeneradorDocumentosService_.generarPDFDocumentoFromServer(item, this.imagen64, item.ciudad);

    }
    this.refrescarIframe(item)
  }

}
