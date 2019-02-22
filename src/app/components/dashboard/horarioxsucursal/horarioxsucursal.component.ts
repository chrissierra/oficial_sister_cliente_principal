import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

	  public array_horarios: any[] = [

			{
		    	  label: 'Hora Entrada Segmento',
		    	  name: 'cuantia_inferior',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:'',
		    	  id:true,
		    	  id_valor:''
		
	    	},
	    	{
		    	  label: 'Hora Salida Segmento',
		    	  name: 'cuantia_superior',
		    	  tipo: 'text',
		    	  select: false,
		    	  value:'',
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
	    	]

}
