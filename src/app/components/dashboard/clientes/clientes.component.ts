import { Component, OnInit } from '@angular/core';
import { MandantesService } from '../../../services/mandantes.service';
import { MensajesSwalService } from '../../../services/mensajes-swal.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
	public booleanoIngreso:boolean=false;
	public Datos:any;
	public tipoEnvio:boolean=false;
  constructor(	public MensajesSwalService_: MensajesSwalService,
  				public MandantesService_: MandantesService) {

  	this.getClientes();
   }

  ngOnInit() {
  }


  getClientes(){
  	this.MandantesService_.getMandante({proveedor_servicios: localStorage.getItem('nombre_empresa')})
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
  		this.array_mandante[0]['value'] = '';
		this.array_mandante[1]['value'] = '';
		this.array_mandante[2]['value'] = '';
		this.array_mandante[4]['value'] = '';
		this.booleanoIngreso = true;
		
  }
  

  }


EditarMandante(id){
	console.log(id)
	this.tipoEnvio=true;
	this.array_mandante[0]['value'] = id['nombre_mandante'];
	this.array_mandante[1]['value'] = id['rut_mandante'];
	this.array_mandante[2]['value'] = id['claveTextual'];
	this.array_mandante[4]['value'] = 'estandar';
	this.booleanoIngreso = true;
	console.log(this.array_mandante)
}

  EnviarCliente(){
  	this.array_mandante[4]['value'] = 'estandar';
  	console.log(this.array_mandante);
  	this.MandantesService_.AddMandante(this.array_mandante)
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



  ActualizarCliente(){
  		this.array_mandante[4]['value'] = 'estandar';
	  	console.log(this.array_mandante);
	  	this.MandantesService_.updateMandante(this.array_mandante)
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
	this.array_mandante[0]['value'] = dato['nombre_mandante'];
	this.array_mandante[3]['value'] = dato['proveedor_servicios'];

	  	console.log(this.array_mandante);
	  	this.MandantesService_.deleteMandante(this.array_mandante)
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


	  public array_mandante: any[] = [
	    	{
		    	  label: 'Nombre',
		    	  name: 'nombre_mandante',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:''
		
	    	},
	    	{
		    	  label: 'Rut Mandante',
		    	  name: 'rut_mandante',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:''
		
	    	},
	    	{
		    	  label: 'Clave',
		    	  name: 'clave',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:''
		
	    	},
	    	{
		    	  label: '',
		    	  name: 'proveedor_servicios',
		    	  tipo: 'hidden',
	      		  hidden: true,
	      		  select: false,
		    	  value: localStorage.getItem('nombre_empresa')
		
	    	},
	    	{
		    	  label: 'Hitos',
		    	  name: 'hitos',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:'asdf'
		
	    	},
	    ];
}