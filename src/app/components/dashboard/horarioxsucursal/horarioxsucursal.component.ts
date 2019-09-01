import { Component, OnInit } from '@angular/core';
import { GuardarSucursalService } from '../../../services/guardar-sucursal.service';
import {Observable, from}  from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

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
	public subtitulo:string;
  constructor(	private snackBar: MatSnackBar,
  				public GuardarSucursalService_: GuardarSucursalService) {
  	this.GuardarSucursalService_.get_sucursales_servidor(JSON.stringify({usuario: localStorage.getItem('nombre_empresa') }))
  	.subscribe( (data:any[]) => {
  		console.log("Sucursales ? ", data)
  		data.map(value =>{ this.sucursal_id.push(value.id);  this.sucursal_nombre.push(value.nombre) })
  	 } )
   }

  ngOnInit() {
  	     const snackBarRef = this.snackBar.open('Por favor leer la breve instrucción ubicada en sección superior', 'OK', {
              duration: 3500
            });
  	this.subtitulo=`
  	INSTRUCCIÓN: Debes poner para cada día de la semana el horario de cada sucursal o instalación. Para casos especiales, es importante notar que requieren que rellenes 
  	la casilla de "fecha"; en el caso que no fuera un caso especial basta que pongas que "No" y dejes la fecha sin rellenar.
  	`
  }

	  public array_horarios: any[] = [

			{
		    	  label: 'Hora Entrada Segmento',
		    	  name: 'cuantia_inferior',
		    	  tipo: 'time',
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
		    	  tipo: 'time',
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
		    	  tipo: 'number',
		    	  select: false,
		    	  value:'',
		    	  id:''
		
	    	},
	    	{
		    	  label: 'Feriados',
		    	  name: 'feriados',
		    	  tipo: 'select',
		    	  select: true,
		    	  opciones: ['Si', 'No'] ,
		    	  opciones_clave: ['Si', 'No'] ,
		    	  value:'',
		    	  name_valor:'feriados',
		    	  valor:'',
		    	  valor_boolean:true,
		    	  id:''
		
	    	},
	    	{
		    	  label: 'Feriado Irrenunciable',
		    	  name: 'feriado_irrenunciable',
		    	  tipo: 'select',
		    	  select: true,
		    	  opciones: ['Si', 'No'] ,
		    	  opciones_clave: ['Si', 'No'] ,
		    	  value:'',
		    	  name_valor:'feriado_irrenunciable',
		    	  valor:'',
		    	  valor_boolean:true,
		    	  id:''
		
	    	},
	    	{
		    	  label: 'Día',
		    	  name: 'dia',
		    	  tipo: 'select',
		    	  select: true,
		    	  opciones: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] ,
		    	  opciones_clave: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'] ,
		    	  value:'',
		    	  name_valor:'dia',
		    	  valor:'',
		    	  valor_boolean:true,
		    	  id:''
		
	    	},
	    	{
		    	  label: 'Caso Especial',
		    	  name: 'caso_especial',
		    	  tipo: 'select',
		    	  select: true,
		    	  opciones: ['Si', 'No'] ,
		    	  opciones_clave: ['Si', 'No'] ,
		    	  value:'',
		    	  name_valor:'caso_especial',
		    	  valor:'',
		    	  valor_boolean:true,
		    	  id:''
		
	    	},
	    	{
		    	  label: 'Fecha',
		    	  name: 'fecha_caso_especial',
		    	  tipo: 'date',
		    	  select: false,
		    	  value:'No',
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
