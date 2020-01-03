import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';	
import * as moment from 'moment';
@Component({
  selector: 'app-bonificaciones',
  templateUrl: './bonificaciones.component.html',
  styleUrls: ['./bonificaciones.component.css']
})
export class BonificacionesComponent implements OnInit {
	public BonoficacionGenerada: Bonificacion;
	public sucursal_id:number;
	public calendario:any;
  constructor(public CrudService_: CrudService) { }

  ngOnInit() {
  	console.log(JSON.parse(localStorage.getItem('TrabajadorSeleccionadoPerfil')).id)
  	this.BonoficacionGenerada = {
  		'empresa_id': Number(localStorage.getItem('id')),
  		'sucursal_id':this.sucursal_id,
  		'trabajador_id':Number( JSON.parse(localStorage.getItem('TrabajadorSeleccionadoPerfil')).id  ),
  		'supervisor_id':Number( JSON.parse(localStorage.getItem('datos_rol_usuario')).id  ),
  		'id_movimiento_unico':'',
  		'monto':'',
  		'dia':0,
  		'mes':0,
  		'anio':0,
  		'tipo':'',
  		'Comentarios':'',
  	}
  }

  SucursalSelected(e){
  	console.log(e)
  	this.sucursal_id = e;
  }

  enviar(){
  	const FORMATO_ENTRADA = 'MM-DD-YYYY';
    const FORMATO_SALIDA = 'MM-DD-YYYY';
    const fecha1 = moment(this.calendario, FORMATO_ENTRADA);
    console.log("MES", fecha1.format('M'))
    console.log("Dia", fecha1.format('D'))
    console.log("Anio", fecha1.format('YYYY'))

    this.BonoficacionGenerada.mes = Number(fecha1.format('M'))
    this.BonoficacionGenerada.dia = Number(fecha1.format('D'))
    this.BonoficacionGenerada.anio = Number(fecha1.format('YYYY'))
    this.BonoficacionGenerada.id_movimiento_unico = this.BonoficacionGenerada.tipo + JSON.parse(localStorage.getItem('TrabajadorSeleccionadoPerfil')).rut + fecha1.format('M') + fecha1.format('D')+fecha1.format('YYYY') 
  	this.BonoficacionGenerada.sucursal_id = this.sucursal_id
  	console.log("Enviando.." , this.BonoficacionGenerada)
  	this.CrudService_.Add( this.BonoficacionGenerada,'ingresarResExtra')
  	.subscribe(data => {
  		console.log(data)
  	}, (err) => {
  		console.log("Error", err)
  	})

  }

}

interface Bonificacion {
	empresa_id:number,
	sucursal_id:number,
	trabajador_id:number,
	supervisor_id:number,
	id_movimiento_unico:String,
	monto:String,
	dia:number,
	mes:number,
	anio:number,
	tipo:String,
	Comentarios:String,
}

/*
empresa_id
sucursal_id
trabajador_id
supervisor_id
id_movimiento_unico
monto
dia
mes
anio
tipo
Comentarios

*/
