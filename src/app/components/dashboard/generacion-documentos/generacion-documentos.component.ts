import { Component, OnInit } from '@angular/core';
import VariablesParametrizadas from '../../../Data/variablesParametrizadas';
import { CrudService } from '../../../services/crud.service';
import { RutasservidorService } from '../../../services/rutasservidor.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-generacion-documentos',
  templateUrl: './generacion-documentos.component.html',
  styleUrls: ['./generacion-documentos.component.css']
})
export class GeneracionDocumentosComponent implements OnInit {
	variablesNoParametrizadas:any[]=[];
  tipocarta:any =false;
	variablesParametrizadas:any[]=[];
  firmas:any;
	titulo:any;
  someHtml:any;
  rutEmpresa:any;
  elcontenido:any;
  public URL_IFRAME:any;
	n: number = 0;
	valorSelectParametrizado:any;
	CuerpoDocumento:any; // Por haber  ~~TipoFalta~~ se le aplicará la siguiente sanción :  ~~Tipo Sancion~~
	SelectParametrizadas:any[] = VariablesParametrizadas;
  constructor(	private sanitizer: DomSanitizer, 
                private RutasservidorService_: RutasservidorService,
  				      private CrudService_: CrudService) { }

  ngOnInit() {
    this.rutEmpresa = localStorage.getItem('rut_empresa')
    this.URL_IFRAME = this.sanitizer.bypassSecurityTrustResourceUrl('https://sister.cl/laravel/index.php/presta/'+this.rutEmpresa);
    this.firmas = [{
          'nombre': 'Firma1',
          'estado': false,
          'valor': ''
          
        },
        {
          'nombre': 'Firma2',
          'estado': false,
          'valor': ''
          
        },
        {
          'nombre': 'Firma3',
          'estado': false,
          'valor': ''
          
        }]
  }


  agregarSaltoDeLinea(){
    this.CuerpoDocumento = this.CuerpoDocumento + " ~~SALTODELINEA~~";  

  }

  agregarVariableNoParametrizada(){
  	/*let borrar1= "Por haber  ~~TipoFalta~~ se le aplicará la siguiente sanción :  ~~Tipo Sancion~~";
  	let borrar2 = "~~TipoFalta~~";
  	let variableReal = "Faltas reiteradas"
  	const stripped = borrar1.replace(borrar2, variableReal)
  	console.log(stripped) */
  	this.variablesNoParametrizadas.push({'nombre': 'variable_'+this.n++})
    console.log(this.variablesNoParametrizadas)
  }

  implementarVariable(textoVariable){
  	this.CuerpoDocumento = this.CuerpoDocumento + " ~~" + textoVariable+"~~";	
     this.someHtml = this.someHtml+ " ~~" + textoVariable+"~~";  
  }

  implementarVariableParametrizada(textoParametrizado){
  	console.log(textoParametrizado)
  	this.variablesParametrizadas.push({'valor': textoParametrizado})
  	this.CuerpoDocumento = this.CuerpoDocumento + " ~~" + textoParametrizado+"~~";

     this.someHtml = this.someHtml+ " ~~" + textoParametrizado+"~~";  
  }

  Envio(){



    console.log(this.someHtml)
  	console.log(this.CuerpoDocumento)
  	console.log(this.variablesNoParametrizadas)
  	console.log(this.variablesParametrizadas)
    console.log(this.firmas)
  	this.CrudService_.Add({ 
              'empresa_id': localStorage.getItem('id'),
							'empresa': localStorage.getItem('nombre_empresa'),
							'CuerpoDocumento': this.someHtml,
							'variablesNoParametrizadas': JSON.stringify(this.variablesNoParametrizadas),
							'variablesParametrizadas': JSON.stringify(this.variablesParametrizadas),
							'titulo':this.titulo,
              'firmas': JSON.stringify(this.firmas),
              'tipocarta':this.tipocarta
						   },'ingresarDocumento')
  	.subscribe(data => {
  		console.log("DATA", data)
  	}
  		, error => {
  			console.log("ERROR", error)
  		})
  

  }

  refrescarIframe(){
            this.CrudService_.Add({'cuerpoDocumento': this.someHtml, 'rutEmpresa': localStorage.getItem('rut_empresa')}, 'armarDocumento')
    .subscribe(data => console.log(data), (err)=> console.log(err),
      ()=> {
        setTimeout(()=> {
     this.URL_IFRAME = this.sanitizer.bypassSecurityTrustResourceUrl('https://sister.cl/laravel/index.php/presta/'+this.rutEmpresa);

        }, 3000)

      })
  }


}
