import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { GeneradorDocumentosService } from '../../../services/generador-documentos.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-visualizacion-documentacion-empresa',
  templateUrl: './visualizacion-documentacion-empresa.component.html',
  styleUrls: ['./visualizacion-documentacion-empresa.component.css']
})
export class VisualizacionDocumentacionEmpresaComponent implements OnInit {
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
  	  	this.CrudService_.get({'empresa_id':localStorage.getItem('id'), 'rut_empresa': localStorage.getItem('rut_empresa')  }, 'GetDocumentosGeneradorPorEmpresa')
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
              }, 5000)

            })
  }

  visualizarPDF(item){
  	console.log("ITEM", item)
    if(item.tipocarta == 1){
      this.GeneradorDocumentosService_.generarPDFDocumentoFromServerTipoCarta(item, this.imagen64, item.ciudad, item.nombre, item.apellido, item.rut);


    }else{
  
      this.GeneradorDocumentosService_.generarPDFDocumentoFromServer(item, this.imagen64, item.ciudad);

    }
     this.refrescarIframe(item)
  }

}
