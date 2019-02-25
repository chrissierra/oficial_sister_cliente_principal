import { Component, OnInit } from '@angular/core';
import { GuardarSucursalService } from '../../../services/guardar-sucursal.service';

@Component({
  selector: 'app-horarioxsucursal',
  templateUrl: './horarioxsucursal.component.html',
  styleUrls: ['./horarioxsucursal.component.css']
})
export class HorarioxsucursalComponent implements OnInit {

	public ruta_get:string  = 'get_horario_por_sucursal'
	public ruta_update:string = 'actualizar_horario_por_sucursal'
	public ruta_delete:string = 'delete_horario_por_sucursal'
	public ruta_add:string = 'ingresar_horario_por_sucursal'
	public sucursal_id:any[] = [];
	public sucursal_nombre:any[] = [];
  constructor(public GuardarSucursalService_: GuardarSucursalService) {
  	this.GuardarSucursalService_.get_sucursales_servidor(JSON.stringify({usuario: localStorage.getItem('nombre_empresa') }))
  	.subscribe( (data:any[]) => {
  		console.log("Sucursales ? ", data)
  		data.map(value =>{ this.sucursal_id.push(value.id);  this.sucursal_nombre.push(value.nombre) })
  	 } )
   }

  ngOnInit() {
  }

	  public array_horarios: any[] = [

			{
		    	  label: 'Hora Entrada Segmento',
		    	  name: 'cuantia_inferior',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:'',
	    		  name_valor:'cuantia_inferior_formato_hora',
		    	  valor:'',
		    	  valor_boolean:true,
				  id:true,
		    	  id_valor:''
		
	    	},
	    	{
		    	  label: 'Hora Salida Segmento',
		    	  name: 'cuantia_superior',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:'',
	    		  name_valor:'cuantia_superior_formato_hora',
		    	  valor:'',
		    	  valor_boolean:true,
		    	  id:''
		
	    	},
	    	{
		    	  label: 'Cantidad Trabajadores',
		    	  name: 'cantidad_trabajadores',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:'',
		    	  id:''
		
	    	},
	    	{
		    	  label: 'Feriados',
		    	  name: 'feriados',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:'',
		    	  id:''
		
	    	},
	    	{
		    	  label: 'Feriado Irrenunciable',
		    	  name: 'feriado_irrenunciable',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:'',
		    	  id:''
		
	    	},
	    	{
		    	  label: 'Día',
		    	  name: 'dia',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:'',
		    	  id:''
		
	    	},
	    	{
		    	  label: 'Caso Especial',
		    	  name: 'caso_especial',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:'',
		    	  id:''
		
	    	},
	    	{
		    	  label: 'Fecha',
		    	  name: 'fecha_caso_especial',
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
		    	  value: localStorage.getItem("nombre_empresa"),
		    	  id:''
		
	    	},
	    	{
		    	  label: 'Sucursal',
		    	  name: 'sucursal_id',
		    	  tipo: 'select',
		    	  select: true,
		    	  opciones: this.sucursal_nombre,
		    	  opciones_clave: this.sucursal_id,
		    	  value:'',
		    	  name_valor:'sucursal_nombre',
		    	  valor:'',
		    	  valor_boolean:true,
		    	  id:''
		
	    	},
	    	]

}
