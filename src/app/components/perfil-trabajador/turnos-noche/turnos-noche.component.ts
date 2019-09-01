import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilTrabajadorServiceService } from '../../../services/perfil-trabajador-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IngresoUsuarioServidorService } from './../../../services/ingreso-usuario-servidor.service';
@Component({
  selector: 'app-turnos-noche',
  templateUrl: './turnos-noche.component.html',
  styleUrls: ['./turnos-noche.component.css']
})
export class TurnosNocheComponent  {
  public id:any;
  public anio:any;
  public mes:any;
  public anioIntermedio:any;
  public mesIntermedio:any;
  public dias:any;
  public Turno:TurnoNoche;
  public hora_a:any[];
  public hora_b:any[];
  public tipo_a:any[];
  public tipo_b:any[];
  public booleanoBotonActualizar: boolean = false;
  public booleanoDatosServidor: boolean = false;

  constructor(  private perfilServicio_: PerfilTrabajadorServiceService,
	        	private param: ActivatedRoute,
	        	private router: Router,
	        	public servicio_empleado: IngresoUsuarioServidorService) { 
  	 this.id = this.param.parent.snapshot.paramMap.get('id');
  	 this.anio = new Date().getFullYear();
  	 this.mes = new Date().getMonth() + 1;
  	 alert(this.mes)
  	 this.dias=this.horario_mensual(this.anio, this.mes);

  	 this.perfilServicio_.getTurnoNocheService({id: this.id, mes: this.mes, anio: this.anio})
  	 .subscribe( (data:any[]) => {
  	 	if(data.length === 0 ){
  	 		// No hay turno para esa fecha en servidor
  	 		this.booleanoBotonActualizar = false;
  	 	}else{
  	 		this.booleanoDatosServidor =true;
  	 		this.booleanoBotonActualizar = true;
  	 	}
  	 	console.log("LA rpta esperada", data[0]['turno']);
  	 	let objeto = JSON.parse( data[0]['turno'] );
  	 	console.log("objeto del parse", objeto['hora_b_'])
  	/* 	Object.keys(objeto).map(function(personNamedIndex){
						    let person = objeto[personNamedIndex];
						    // do something with person
						    let turno = new Array();
						    turno.push(person);

						   console.log(person)
						});*/
		const llavesTurnoNoche = Object.keys(objeto)
		const peopleArray = Object.values(objeto)

		console.log("peopleArray", peopleArray)



		let arraycito = new Array()
		let arraycito1 = new Array()
		let arraycito2 = new Array()
		let arraycito3 = new Array()
		let contador = 1;
		for (var i = 1; i < this.dias.length +1 ; ++i) {
			console.log(i)

			arraycito.push(objeto['hora_b_'+i])
			arraycito1.push(objeto['tipo_b_'+i])
			arraycito2.push(objeto['hora_a_'+i])
			arraycito3.push(objeto['tipo_a_'+i])
		}

		this.hora_a = arraycito2;
		this.tipo_a = arraycito3;
		this.hora_b = arraycito;
		this.tipo_b = arraycito1;
		console.log(arraycito)
		console.log(arraycito1)
		console.log(arraycito2)
		console.log(arraycito3)
  	 })

  




  }



   private DiasDelMes () {

    let fecha = new Date();
    let anio = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;

    return new Date(anio, mes, 0).getDate();
} // Fin función DiasDelMes  ; Usada en horario mensual, para dias a mostrar.


dia_de_la_semana(anio, mes, dia){

	let fecha = new Date(anio+',' + mes +',' + dia);

	let weekday = fecha.getDay();


	  if(weekday==0){
		return this.perfilServicio_.array_dias[( 6 )]
	  }else{
	  	return this.perfilServicio_.array_dias[( weekday -1 )]
	  }

} // Fin funcion dia_de_la_semana



horario_mensual(anio, mes){

		let dias = new Date(anio, mes, 0).getDate();
		let conjunto_dias = new Array();


		for (let i = 1; i < dias + 1; i++) {
			conjunto_dias.push(this.dia_de_la_semana(anio, mes, i));
		}

		return  conjunto_dias;
} // Fin función horario_mensual


guardar(forma){
	this.Turno = {

		mes: forma.value['mes'],
		anio: forma.value['anio'],
		id_trabajador: forma.value['id_trabajador'],
		turno: JSON.stringify(forma.value)

	}

	if(this.booleanoBotonActualizar === false){
					console.log("En guardar")

		            this.perfilServicio_.guardarTurnoNocheService(this.Turno)
					.subscribe( data => {
						console.log(data)
					} )
				
				}else{
					console.log("aca..... en update")
				this.perfilServicio_.UpdateTurnoNocheService(this.Turno)
				.subscribe( data => {
					console.log(data)
				} )
	}




}// Fin función Guardar


actualizarTurno(){

}



ActualizarMesEnCurso(){

	this.hora_a = [];
	this.tipo_a = [];
	this.hora_b = [];
	this.tipo_b = [];
	
	this.mes = this.mesIntermedio;
	this.anio = this.anioIntermedio;
    this.dias=this.horario_mensual(this.anio, this.mes);
    console.log({id: this.id, mes: this.mes, anio: this.anio})

      	 this.perfilServicio_.getTurnoNocheService({id: this.id, mes: this.mes, anio: this.anio})
  	 .subscribe( (data:any[]) => {
  	 	console.log("Que viene de data...", data)
  	 	if(data.length === 0 ){
  	 		// No hay turno para esa fecha en servidor
  	 		this.booleanoBotonActualizar = false;
  	 	}else{
  	 		this.booleanoDatosServidor =true;
  	 		this.booleanoBotonActualizar = true;
  	 	}
  	 	console.log("LA rpta esperada", data[0]['turno']);
  	 	let objeto = JSON.parse( data[0]['turno'] );
  	 	console.log("objeto del parse", objeto['hora_b_'])
  	/* 	Object.keys(objeto).map(function(personNamedIndex){
						    let person = objeto[personNamedIndex];
						    // do something with person
						    let turno = new Array();
						    turno.push(person);

						   console.log(person)
						});*/
		const llavesTurnoNoche = Object.keys(objeto)
		const peopleArray = Object.values(objeto)

		console.log("peopleArray", peopleArray)



		let arraycito = new Array()
		let arraycito1 = new Array()
		let arraycito2 = new Array()
		let arraycito3 = new Array()
		let contador = 1;
		for (var i = 1; i < this.dias.length +1 ; ++i) {
			console.log(i)

			arraycito.push(objeto['hora_b_'+i])
			arraycito1.push(objeto['tipo_b_'+i])
			arraycito2.push(objeto['hora_a_'+i])
			arraycito3.push(objeto['tipo_a_'+i])
		}

		this.hora_a = arraycito2;
		this.tipo_a = arraycito3;
		this.hora_b = arraycito;
		this.tipo_b = arraycito1;
		console.log(arraycito)
		console.log(arraycito1)
		console.log(arraycito2)
		console.log(arraycito3)
  	 })
}

}

interface TurnoNoche {
	mes: number;
	anio:number;
	id_trabajador:number;
	turno: any;
}
