import { Component, OnInit } from '@angular/core';
import { CentroCostosService } from '../../../services/centro-costos.service';
import { MensajesSwalService } from '../../../services/mensajes-swal.service';
@Component({
  selector: 'app-centros-costos',
  templateUrl: './centros-costos.component.html',
  styleUrls: ['./centros-costos.component.css']
})
export class CentrosCostosComponent implements OnInit{
	public booleanoIngreso:boolean=false;
	public Datos:any;
	public tipoEnvio:boolean=false;
	public rut_empresa:any;
  constructor(	public MensajesSwalService_: MensajesSwalService,
  				public CentroCostosService_: CentroCostosService)  { 
  	this.getCentroCosto()
  	this.rut_empresa = localStorage.getItem('rut_empresa');
  }

  ngOnInit() {
  }



  	 getCentroCosto(){
		  	this.CentroCostosService_.getcentroCosto({nombre_empresa: localStorage.getItem('nombre_empresa')})
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
	  		this.array_centro_costos[0]['value'] = '';
			this.booleanoIngreso = true;
			
	  	}
  
  }


EditarCentroCosto(id){
	console.log(id)
	this.tipoEnvio=true;
	this.array_centro_costos[0]['value'] = id['nombre'];
	this.array_centro_costos[1]['value'] = id['id'];	
	this.booleanoIngreso = true;
	console.log(this.array_centro_costos)
}

  EnviarCentroCosto(){
  	

  	console.log(this.array_centro_costos);
  	this.CentroCostosService_.AddcentroCosto(this.array_centro_costos)
  	.subscribe( data => {
  		console.log(data);
  		this.getCentroCosto();
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

borrarCentroCosto(dato){
  	this.array_centro_costos[0]['value'] = dato['id'];

console.log(this.array_centro_costos);
  	this.CentroCostosService_.deletecentroCosto(this.array_centro_costos)
  	.subscribe( data => {
  		console.log(data);
  		this.getCentroCosto();
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


  ActualizarCentroCosto(){
  	
  	console.log(this.array_centro_costos);
  	//this.array_centro_costos[1]['value'] = localStorage.getItem('nombre_empresa');
  	this.CentroCostosService_.updatecentroCosto(this.array_centro_costos)
  	.subscribe( data => {
  		console.log(data);
  		this.getCentroCosto();
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

	  public array_centro_costos: any[] = [
		    	{
			    	  label: 'Nombre',
			    	  name: 'nombre',
			    	  tipo: 'text',
	      		      hidden: false,
	      		      select: false,
			    	  value: ''
			
		    	},
		    	{
			    	  label: 'Nombre',
			    	  name: 'nombre_empresa',
			    	  tipo: 'hidden',
	      		      hidden: true,
	      		      select: false,
			    	  value: localStorage.getItem('nombre_empresa')
			
		    	},
	    	]
}