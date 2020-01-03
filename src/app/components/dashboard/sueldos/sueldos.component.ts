import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
@Component({
  selector: 'app-sueldos',
  templateUrl: './sueldos.component.html'
})
export class SueldosComponent implements OnInit {

  constructor(public CrudService_: CrudService) { }

  ngOnInit() {


  	this.CrudService_.Add({'id': 4}, 'GetResExtra_porSucursal')
  	.subscribe(data => console.log("data", data), (err)=> console.log(err), ()=> console.log("Fin.."))

  

  	/*

	this.CrudService_.Add({
  		'empresa_id':5,
  		'sucursal_id':4,
		'trabajador_id':235,
		'supervisor_id':235,
		'id_movimiento_unico':4,
		'monto':5000,
		'dia': 5,
		'mes': 8,
		'anio': 2019,
		'tipo': 'Turno Extra'
  	}, 'ingresarResExtra')
  	.subscribe(data => {
  		console.log(data)
  	})


  	this.CrudService_.Add({'id': 2}, 'GetResExtra_unico')
  	.subscribe(data => {//console.log(data)
  		}
  		)*/

  }

}
