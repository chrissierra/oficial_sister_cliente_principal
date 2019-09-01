import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { GeneradorDocumentosService } from '../../../services/generador-documentos.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import swal from 'sweetalert2';
import  FiniquitoBase  from './../../../Data/finiquito';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
    public DocumentoEmitidoBoleano:boolean;
  	public ciudad:any="NOAPLICA";
  	public fecha:any;
  	public TipoDocumento:any;
  	public selectTipoDocumento:any;
  	public variablesDefinitivasNoParametrizadas:any;
  	public variablesDefinitivasParametrizadas:any;
  	public DocumentoEspecificoSeleccionado:any;
  	public KeysvariablesDefinitivasParametrizadas:any;
  	public imagen64:any;
    public id:any;
    public seleccionEnCurso:any;
    public TipoDocumentoEstandar:any;
    public TipoDocumentoEstandarSeleccionado:any = false;
    public articuloSeleccionado:any=null;
    public pp:boolean;
    public URL_IFRAME:any
    public rutEmpresa:any;
  constructor(	private sanitizer: DomSanitizer, 
                private param: ActivatedRoute,
                private router: Router,
                private GeneradorDocumentosService_: GeneradorDocumentosService,
  				      private CrudService_: CrudService) { 

  }


  onChangeEstandar(event, selectTipoDocumentosEstandar){
    console.log(event)
    console.log(selectTipoDocumentosEstandar)
  }

  armarFormularioDocumentoEstandar(tipoDocumentoEstandar){
    if(tipoDocumentoEstandar === 'Finiquito'){
        this.TipoDocumentoEstandarSeleccionado = FiniquitoBase;
        this.TipoDocumentoEstandarSeleccionado.Seleccionado = true;
    }
    console.log(tipoDocumentoEstandar)
  }


  checkValuePP(valor){
    console.log(valor)
    this.pp = valor;
  }


  Generarfiniquito(){
    console.log(this.TipoDocumentoEstandarSeleccionado)
    console.log(this.articuloSeleccionado)
    if(this.articuloSeleccionado === null){
      return alert('Debes seleccionar un artículo que fundamente el finiquito.')
    }else{
      this.GeneradorDocumentosService_.generarFiniquito(this.articuloSeleccionado, this.TipoDocumentoEstandarSeleccionado, this.pp, this.ciudad)
    }
  }

  ngOnInit() {
        this.TipoDocumentoEstandarSeleccionado = FiniquitoBase;
        this.rutEmpresa = localStorage.getItem('rut_empresa')
        this.URL_IFRAME = this.sanitizer.bypassSecurityTrustResourceUrl('https://sister.cl/laravel/index.php/presta/'+this.rutEmpresa);

        console.log(FiniquitoBase)
        console.log("FiniquitoBase.Articulos", FiniquitoBase.Articulos)
        console.log("FiniquitoBase.Articulos[0]", FiniquitoBase.Articulos[0].n159)
        this.id =  this.param.parent.snapshot.paramMap.get('id'); 
        //alert(this.id)   
  	  	this.CrudService_.get({'empresa_id':localStorage.getItem('id'), 'rut_empresa': localStorage.getItem('rut_empresa')  }, 'GetDocumento')
		  	.subscribe((data:any) => {
		  		//console.log(data.response)
		  		console.log(data)
		  		this.imagen64 = data.image64
		  		this.selectTipoDocumento = data.response; 
		  	})
  }

  checkValue(e, input, numeroArticulo){
    console.log("Viendo si funcionan los check de articulos ", e)
    console.log(input)
    this.articuloSeleccionado = e;
    input.value = "artículo " + numeroArticulo + " " + e.numero + " " + e.nombre;
    console.log(this.articuloSeleccionado)
  }


  armarFormularioDocumento(seleccion){
  	//console.log(seleccion)
  	this.selectTipoDocumento.map(data => {
  		//console.log("DATIS", data.id)
  		//console.log(seleccion)
      
  		if(data.id == seleccion){
  			console.log(data)
        this.seleccionEnCurso = data;
  			return this.armarFormularios(data)
  		}
  	})
  }

  errorRespuesta(){
       swal({
          title: 'Error',
          text: 'Todos los campos son obligatorios',
          type: 'error',
          confirmButtonText: 'Ok'
        })
  }

  mensajeExito(){
        swal({
          title: 'Documento ingresado',
          text: 'El documento se procesó correctamente.',
          type: 'success',
          confirmButtonText: 'Ok'
        })
  }

  revisarFinal(){
  	let peito= '';
  	let n = 0;
  	console.log(this.DocumentoEspecificoSeleccionado)
    if(this.DocumentoEspecificoSeleccionado === undefined) return this.errorRespuesta();
  	this.variablesDefinitivasNoParametrizadas.map(data => {
  		console.log('~~'+ data.valor +'~~') // new RegExp('hello', 'g')
  		peito = this.DocumentoEspecificoSeleccionado.CuerpoDocumento.replace('~~'+ data.valor +'~~', data.value)
  		this.DocumentoEspecificoSeleccionado.CuerpoDocumento = peito;
  		console.log(peito)
  	})

  	this.variablesDefinitivasParametrizadas.map((data) => {
      if(this.KeysvariablesDefinitivasParametrizadas[n] === 'rut') data = this.GeneradorDocumentosService_.format(data)
  		console.log('~~'+ data +'~~')
  		peito = this.DocumentoEspecificoSeleccionado.CuerpoDocumento.replace(new RegExp('~~'+ this.KeysvariablesDefinitivasParametrizadas[n] +'~~', 'g'), data)
  		this.DocumentoEspecificoSeleccionado.CuerpoDocumento = peito;
  		console.log(peito)
  		n++;
  	})


  	console.log('****************** importante ***********', this.DocumentoEspecificoSeleccionado)
  	console.log(this.variablesDefinitivasNoParametrizadas)
  	console.log(this.variablesDefinitivasParametrizadas)
  	

    if(this.DocumentoEspecificoSeleccionado.tipocarta == 1){
      let peo = JSON.parse(localStorage.getItem('TrabajadorSeleccionadoPerfil'))
      console.log(peo)
      if(!this.analizarTodo(this.variablesDefinitivasNoParametrizadas, this.variablesDefinitivasParametrizadas, this.ciudad))  return this.errorRespuesta();
      this.GeneradorDocumentosService_.generarPDFDocumentoTipoCarta(this.DocumentoEspecificoSeleccionado, this.imagen64, this.ciudad, peo.nombre,peo.apellido, peo.rut );

    }else{
      console.log(this.analizarTodo(this.variablesDefinitivasNoParametrizadas, this.variablesDefinitivasParametrizadas, this.ciudad))
      this.analizarTodo(this.variablesDefinitivasNoParametrizadas, this.variablesDefinitivasParametrizadas, this.ciudad)

      this.GeneradorDocumentosService_.generarPDFDocumento(this.DocumentoEspecificoSeleccionado, this.imagen64, this.ciudad);

    } 


    
    this.CrudService_.Add({
              'empresa_id': localStorage.getItem('id'),
              'trabajador_id': this.id,
              'fecha_emision': moment().locale("es").format('LL'),
              'empresa': localStorage.getItem('nombre_empresa'),
              'CuerpoDocumento': this.DocumentoEspecificoSeleccionado.CuerpoDocumento,
              'variablesNoParametrizadas': JSON.stringify(this.variablesDefinitivasNoParametrizadas),
              'variablesParametrizadas': JSON.stringify(this.variablesDefinitivasParametrizadas),
              'ciudad': this.ciudad,
              'dia': new Date().getDate(),
              'mes': (new Date().getMonth()+1),
              'anio': new Date().getFullYear(),
              'titulo':this.DocumentoEspecificoSeleccionado.titulo,
              'firmas': JSON.stringify(this.DocumentoEspecificoSeleccionado.firmas),
              'tipocarta':this.DocumentoEspecificoSeleccionado.tipocarta,
              'nombre':JSON.parse(localStorage.getItem('TrabajadorSeleccionadoPerfil')).nombre,
              'apellido':JSON.parse(localStorage.getItem('TrabajadorSeleccionadoPerfil')).apellido,
              'rut':JSON.parse(localStorage.getItem('TrabajadorSeleccionadoPerfil')).rut,
    }, 'ingresarDocumentoPorTrabajador')
    .subscribe((data:any) => {
      console.log(data)
        if(data.estado === 'ok'){
            //this.router.navigate(['/PerfilTrabajador/'+this.id+'/Perfil'])
            this.mensajeExito()
        }
    }, (err)=> {
      console.log(err)
    }, ()=> {


          this.CrudService_.Add({'cuerpoDocumento': this.DocumentoEspecificoSeleccionado.CuerpoDocumento, 'rutEmpresa': localStorage.getItem('rut_empresa')}, 'armarDocumento')
          .subscribe(data => console.log(data), (err)=>  console.log(err), ()=> {
                          setTimeout(()=> {
                               this.DocumentoEmitidoBoleano = true;
                               this.URL_IFRAME = this.sanitizer.bypassSecurityTrustResourceUrl('https://sister.cl/laravel/index.php/presta/'+this.rutEmpresa);

                          }, 3000)
          })

    })



  }

  	/*let borrar1= "Por haber  ~~TipoFalta~~ se le aplicará la siguiente sanción :  ~~Tipo Sancion~~";
  	let borrar2 = "~~TipoFalta~~";
  	let variableReal = "Faltas reiteradas"
  	const stripped = borrar1.replace(borrar2, variableReal)
  	console.log(stripped) */

    analizarTodo(varNoPar, varPar, ciudad){
      let respuesta=true;
      varNoPar.map(data=>{
        console.log(data.value)
        if(data.value === undefined) respuesta= false;
      })

      if(ciudad === undefined) respuesta = false;

      return respuesta;
    }


  armarFormularios(data){
  	this.DocumentoEspecificoSeleccionado = data;
	let variablesDefinitivasParametrizadas = [];  
	let KeysvariablesDefinitivasParametrizadas= [];

  	let array_variablesParametrizadas = JSON.parse(data.variablesParametrizadas);
  	array_variablesParametrizadas.map(variablesParametrizadas => {


  		let peo = JSON.parse(localStorage.getItem('TrabajadorSeleccionadoPerfil'))
		const peopleArray = Object.entries(peo).map((i, value) => {
			
			console.log(variablesParametrizadas.valor)
			if(variablesParametrizadas.valor == i[0]){
				variablesDefinitivasParametrizadas.push(i[1]); console.log(i[1])	
				KeysvariablesDefinitivasParametrizadas.push(i[0]);
			} 
		})
  	})

  	this.KeysvariablesDefinitivasParametrizadas = KeysvariablesDefinitivasParametrizadas
  	this.variablesDefinitivasParametrizadas = variablesDefinitivasParametrizadas
  	console.log(variablesDefinitivasParametrizadas)
  	this.variablesDefinitivasNoParametrizadas = JSON.parse(data.variablesNoParametrizadas)
  	console.log(JSON.parse(data.variablesNoParametrizadas))
  }


  onChange(evento, data){
  	//console.log(evento)
  	//console.log(data)
  }



}
