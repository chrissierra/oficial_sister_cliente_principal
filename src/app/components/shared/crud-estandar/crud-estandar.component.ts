import { Component, OnInit, Input, Output } from '@angular/core';
import { MensajesSwalService } from '../../../services/mensajes-swal.service';
import { CrudService } from '../../../services/crud.service';


@Component({
  selector: 'app-crud-estandar',
  templateUrl: './crud-estandar.component.html',
  styleUrls: ['./crud-estandar.component.css']
})
export class CrudEstandarComponent implements OnInit{
	public booleanoIngreso:boolean=false;
	public Datos:any;
	public tipoEnvio:boolean=false;
	public array_temp:any[];
	@Input() array_mandante: any[];
	@Input() ruta_get: any;
	@Input() ruta_update: any;
	@Input() ruta_delete: any;
	@Input() ruta_add: any;
  constructor(	
  				public CrudService_ : CrudService,
  				public MensajesSwalService_: MensajesSwalService) {

  	
  	console.log("this.array_mandante", this.array_mandante)
   }

  ngOnInit() {
  	console.log("this.array_mandante", this.array_mandante);
  	setTimeout( ()=> {
  		  	this.getClientes();

  	}, 3000 )
  }


  getClientes(){
  	console.log(this.ruta_get)
  	this.CrudService_.get({ 'nombre_empresa': localStorage.getItem('nombre_empresa')}, this.ruta_get)
  	.subscribe( data => {
  		console.log(data);
  		this.Datos = data;
  	},(error) => {
  		console.log(error)
  	} )
   
  }

  agregarNuevoCliente(boolean){
  	this.tipoEnvio=false;

  	if(boolean === false){
  		this.booleanoIngreso = boolean;	
  	}else{

  	this.booleanoIngreso = boolean

	for (var i = 0; i < this.array_mandante.length; ++i) {
		// code...
		if(this.array_mandante[i]['name']!=='nombre_empresa'){
			this.array_mandante[i]['value'] = ''
		}
		
	}
	
	this.booleanoIngreso = true;
		
  }
  

  }


EditarMandante(id){
	console.log(id)
	this.tipoEnvio=true;
	this.array_temp = this.array_mandante;
	for (var i = 0; i < this.array_mandante.length; ++i) {
		// code...

		if(this.array_mandante[i]['id']){
			this.array_mandante[i]['id_valor'] = id['id']
		}else{
			this.array_mandante[i]['value'] = id[this.array_mandante[i]['name']]
			if(this.array_mandante[i]['valor_boolean']) this.array_mandante[i]['valor'] = id[this.array_mandante[i]['name_valor']] 
		}

	}
	console.log("id[this.array_mandante[i]['name_valor']] ", id[this.array_mandante[1]['name_valor']] )
	this.booleanoIngreso = true;
}



  EnviarCliente(){	
  	console.log(this.array_mandante)

  	this.CrudService_.Add(this.array_mandante, this.ruta_add)
  	.subscribe( data => {
  		console.log(data);
  		this.getClientes();
  		this.agregarNuevoCliente(false)
  	},
  	error =>{
  		console.log(error)
  		this.MensajesSwalService_.mensajeStandar({
  			titulo: 'Error',
	        texto: 'Todos los campos son necesarios ' + JSON.stringify(error),
	        tipo: 'error',
	        boton: 'Ok'
  		})
  	} )
  }



  ActualizarCliente(){
	  	console.log(this.array_mandante);
	  	this.CrudService_.update(this.array_mandante, this.ruta_update)
	  	.subscribe( data => {
	  		console.log(data);
	  		this.getClientes();
	  		this.agregarNuevoCliente(false)
	  	},
	  	error =>{
	  		console.log("Error acutalizarndo", error)
	  		this.MensajesSwalService_.mensajeStandar({
	  			titulo: 'Error',
		        texto: 'Todos los campos son necesarios',
		        tipo: 'error',
		        boton: 'Ok'
	  		})
	  	} )
  }




borrarCliente(dato){

		for (var i = 0; i < this.array_mandante.length; ++i) {
			// code...

			if(this.array_mandante[i]['id']){
				this.array_mandante[i]['id_valor'] = dato['id']
			}else{
				this.array_mandante[i]['value'] = dato[this.array_mandante[i]['name']]

			}

		}

	  	this.CrudService_.delete(this.array_mandante, this.ruta_delete)
	  	.subscribe( data => {
	  		console.log(data);
	  		this.getClientes();
	  		this.agregarNuevoCliente(false)
	  	},
	  	error =>{
	  		console.log("Error borrando", error)
	  		this.MensajesSwalService_.mensajeStandar({
	  			titulo: 'Error',
		        texto: 'Todos los campos son necesarios',
		        tipo: 'error',
		        boton: 'Ok'
	  		})
	  	} )
}


	
}
