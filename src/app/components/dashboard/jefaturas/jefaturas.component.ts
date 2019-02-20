import { Component } from '@angular/core';
import { CargosService } from '../../../services/cargos.service';
import { CentroCostosService } from '../../../services/centro-costos.service';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-jefaturas',
  templateUrl: './jefaturas.component.html',
  styleUrls: ['./jefaturas.component.css']
})
export class JefaturasComponent {
	public centro_de_costos_valor:any[] = [];
	public centro_de_costos_id:any[] = [];
	public departamento_valor:any[] = [];
	public departamento_id:any[] = [];
	public ruta_get:string  = 'getjefaturas'
	public ruta_update:string = 'actualizarjefaturas'
	public ruta_delete:string = 'deletejefaturas'
	public ruta_add:string = 'ingresarjefaturas'
	public nombre_empresa:any=localStorage.getItem('nombre_empresa');
  constructor(	public CrudService_:CrudService,
  				public CentroCostosService_: CentroCostosService)  { 

					  	this.CentroCostosService_.getcentroCosto({ 'nombre_empresa': this.nombre_empresa })
					  	.subscribe((data:any[]) => {

					  		data.map(value => this.centro_de_costos_valor.push(value.nombre))
					  		data.map(value => this.centro_de_costos_id.push(value.id))
					  	});
					  	this.array_jefaturas[3].value = this.nombre_empresa;

					  	this.CrudService_.get({ 'nombre_empresa': this.nombre_empresa }, 'getdepartamento')
					  	.subscribe( (data:any[])=>{
					  		data.map(value => this.departamento_valor.push(value.nombre))
					  		data.map(value => this.departamento_id.push(value.id))
					  	} )

  }

	  public array_jefaturas: any[] = [

			{
		    	  label: 'Nombre',
		    	  name: 'nombre',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:'',
		    	  id:true,
		    	  id_valor:''
		
	    	},
	    	{
		    	  label: 'Centro de Costos',
		    	  name: 'centrocosto_id',
		    	  tipo: 'select',
		    	  select: true,
		    	  opciones: this.centro_de_costos_valor,
		    	  opciones_clave: this.centro_de_costos_id,
		    	  value:'',
		    	  name_valor:'centro_costo_nombre',
		    	  valor:'',
		    	  valor_boolean:true,
		    	  id:''
		
	    	},
	        {
		    	  label: 'Departamento',
		    	  name: 'departamento_id',
		    	  tipo: 'select',
		    	  select: true,
		    	  opciones: this.departamento_valor,
		    	  opciones_clave: this.departamento_id,
		    	  value:'',
		    	  name_valor:'departamento_nombre',
		    	  valor:'',
		    	  valor_boolean:true,
		    	  id:''
		
	    	},
	    	{
		    	  label: '',
		    	  name: 'nombre_empresa',
		    	  tipo: 'hidden',
	      		  hidden: true,
	      		  select: false,
		    	  value: this.nombre_empresa,
		    	  id:''
		
	    	},
	    	]

}
