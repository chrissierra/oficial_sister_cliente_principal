import { Component, OnInit } from '@angular/core';
import { CargosService } from '../../../services/cargos.service';
import { MensajesSwalService } from '../../../services/mensajes-swal.service';
@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {
	public booleanoIngreso:boolean=false;
	public Datos:any;
	public tipoEnvio:boolean=false;
	public rut_empresa:any;
  constructor(	public MensajesSwalService_: MensajesSwalService,
  				public CargosService_: CargosService)  { 
  	this.getClientes()
  	this.rut_empresa = localStorage.getItem('rut_empresa');
  	console.log(localStorage.getItem('rut_empresa'))
  	console.log(localStorage.getItem('nombre_empresa'))
  	console.log(localStorage.getItem('id'))

  }

  ngOnInit() {
  }



  	 getClientes(){
		  	this.CargosService_.getCargo({nombre_empresa: localStorage.getItem('nombre_empresa')})
		  	.subscribe( data => {
		  		console.log(data);
		  		this.Datos = data;
		  	} )
   
  	 }

  agregarNuevoCliente(boolean){
  	this.tipoEnvio=false;

	  	if(boolean === false){
	  		this.booleanoIngreso = boolean;	
	  	}else{

	  		this.booleanoIngreso = boolean;
	  		this.array_cargo[0]['value'] = '';
			this.array_cargo[1]['value'] = '';
			this.array_cargo[2]['value'] = '';
			this.array_cargo[4]['value'] = '';
			this.array_cargo[5]['value'] = '';
			this.booleanoIngreso = true;
			
	  	}
  
  }


EditarCargo(id){
	console.log(id)
	this.tipoEnvio=true;
	this.array_cargo[0]['value'] = id['cargo'];
	this.array_cargo[4]['value'] = id['hito'];
	this.array_cargo[5]['value'] = id['descripcion'];	
	this.booleanoIngreso = true;
	console.log(this.array_cargo)
}

  EnviarCliente(){
  	
  	console.log(this.array_cargo);
  	this.array_cargo[1]['value'] = localStorage.getItem('nombre_empresa');
	this.array_cargo[2]['value'] = localStorage.getItem('rut_empresa');
	this.array_cargo[3]['value'] = localStorage.getItem('id');
  	this.CargosService_.AddCargo(this.array_cargo)
  	.subscribe( data => {
  		console.log(data);
  		this.getClientes();
  		this.agregarNuevoCliente(false)
  	},
  	error =>{
  		this.MensajesSwalService_.mensajeStandar({
  			titulo: 'Error',
	        texto: 'Todos los campos son necesarios',
	        tipo: 'error',
	        boton: 'Ok'
  		})
  	} )
  }

borrarCliente(dato){
	 	console.log(dato);
  	this.array_cargo[0]['value'] = dato['cargo'];
  	this.array_cargo[1]['value'] = localStorage.getItem('nombre_empresa');
	this.array_cargo[2]['value'] = localStorage.getItem('rut_empresa');
	this.array_cargo[3]['value'] = localStorage.getItem('id');
  	this.array_cargo[4]['value'] =  dato['hito'];
  	this.array_cargo[5]['value'] =  dato['descripcion'];
console.log(this.array_cargo);
  	this.CargosService_.deleteCargo(this.array_cargo)
  	.subscribe( data => {
  		console.log(data);
  		this.getClientes();
  		this.agregarNuevoCliente(false)
  	},
  	error =>{
  		this.MensajesSwalService_.mensajeStandar({
  			titulo: 'Error',
	        texto: 'Todos los campos son necesarios',
	        tipo: 'error',
	        boton: 'Ok'
  		})
  	} )
}


  ActualizarCargo(){
  	
  	console.log(this.array_cargo);
  	this.array_cargo[1]['value'] = localStorage.getItem('nombre_empresa');
	this.array_cargo[2]['value'] = localStorage.getItem('rut_empresa');
	this.array_cargo[3]['value'] = localStorage.getItem('id');
  	this.CargosService_.updateCargo(this.array_cargo)
  	.subscribe( data => {
  		console.log(data);
  		this.getClientes();
  		this.agregarNuevoCliente(false)
  	},
  	error =>{
  		this.MensajesSwalService_.mensajeStandar({
  			titulo: 'Error',
	        texto: 'Todos los campos son necesarios',
	        tipo: 'error',
	        boton: 'Ok'
  		})
  	} )
  }

	  public array_cargo: any[] = [
		    	{
			    	  label: 'Cargo',
			    	  name: 'cargo',
			    	  tipo: 'text',
			    	  select: false,
			    	  value:''
			
		    	},
		    	{
			    	  label: 'Nombre',
			    	  name: 'nombre_empresa',
			    	  tipo: 'hidden',
	      		      hidden: true,
	      		      select: false,
			    	  value: localStorage.getItem('nombre_empresa')
			
		    	},
		    	{
			    	  label: 'Nombre',
			    	  name: 'rut_empresa',
			    	  tipo: 'hidden',
	      		  	  hidden: true,
	      		  	  select: false,
			    	  value: this.rut_empresa
			
		    	},
		    	{
			    	  label: 'Nombre',
			    	  name: 'empresa_id',
			    	  tipo: 'hidden',
	      		      hidden: true,
	      		      select: false,
			    	  value: localStorage.getItem('id')
			
		    	},
		    	{
			    	 label: 'Tipo de turnos',  
     				 name: 'hito',
     				 tipo: 'select',
     				 select: true,
     				 opciones: [ 'Si', 'No'],
     				 value:''
			
		    	},
		    	{
			    	  label: 'Nombre',
			    	  name: 'descripcion',
			    	  tipo: 'text',
			    	  select: false,
			    	  value:''
			
		    	},
	    	]
}