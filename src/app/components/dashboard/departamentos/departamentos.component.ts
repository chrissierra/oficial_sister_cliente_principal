import { Component } from '@angular/core';
import { CargosService } from '../../../services/cargos.service';
import { CentroCostosService } from '../../../services/centro-costos.service';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent   {
	public centro_de_costos_valor:any[] = [];
	public centro_de_costos_id:any[] = [];
	public booleanoIngreso:boolean=false;
	public Datos:any;
	public tipoEnvio:boolean=false;
	public rut_empresa:any;	 
	public ruta_get:string  = 'getdepartamento'
	public ruta_update:string = 'actualizardepartamento'
	public ruta_delete:string = 'deletedepartamento'
	public ruta_add:string = 'ingresardepartamento'
	public nombre_empresa:any=localStorage.getItem('nombre_empresa');

  constructor(	public CrudService_:CrudService,
  				public CentroCostosService_:CentroCostosService,
  				public CargosService_: CargosService)  { 

					  	this.CentroCostosService_.getcentroCosto({ 'nombre_empresa': localStorage.getItem('nombre_empresa') })
					  	.subscribe((data:any[]) => {

					  		data.map(value => this.centro_de_costos_valor.push(value.nombre))
					  		data.map(value => this.centro_de_costos_id.push(value.id))
					  	});
					  	this.array_mandante[3].value = this.nombre_empresa;

		  }



	  public array_mandante: any[] = [

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
		    	  label: 'Jefatura',
		    	  name: 'jefatura_id',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:'',
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
	    	{
		    	  label: 'Trabajador Encargado',
		    	  name: 'trabajador_encargado_id',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:'',
		    	  id:''
		
	    	},
	    	]
}
