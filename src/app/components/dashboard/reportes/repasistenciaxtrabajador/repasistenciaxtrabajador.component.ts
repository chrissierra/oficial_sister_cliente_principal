import { PlanillaservicesService } from './../../../../services/planillaservices.service';
import { LibroremuneracionesService } from '../../../../services/libroremuneraciones.service';
import {MatDatepicker} from '@angular/material/datepicker';
import { Moment} from 'moment';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import * as XLSX from 'xlsx';
import { Store } from '@ngrx/store';
import * as fromMarcaje from '../../../marcaje.actions';
import { AppState } from '../../../../app.reducers';
@Component({
  selector: 'app-repasistenciaxtrabajador',
  templateUrl: './repasistenciaxtrabajador.component.html',
  styleUrls: ['./repasistenciaxtrabajador.component.css']
})
export class RepasistenciaxtrabajadorComponent  {
 public arrayNombres:any[];
 public selectedPersonId:any;
 public nombreSeleccion:any='';
 public apellidoSeleccion:any='';
 public mes:any = 'mes';
 public anio:any;
 public nombreEmpresa:any;
 public calendario:any;
 public movimiento:any;
  constructor(private store: Store<AppState>,
              public servicioLibroDiario:LibroremuneracionesService,
              public PlanillaservicesService_ :PlanillaservicesService) {
  	  	
  	  	this.nombreEmpresa = localStorage.getItem("nombre_empresa");
  		  this.PlanillaservicesService_.obtener_planilla(localStorage.getItem('nombre_empresa'))
		  	.subscribe(( data: any[]) => {
		  		
		  		this.arrayNombres = data;
		  		
		  		
		  	} );

   }


 ActualizarFecha(){
      
      if(this.selectedPersonId>0){

      	 const FORMATO_ENTRADA = 'MM-DD-YYYY';
      	 const FORMATO_SALIDA = 'MM-YYYY';
      	 const fecha1 = moment(this.calendario, FORMATO_ENTRADA);
      	 //alert(fecha1.format(FORMATO_SALIDA));
      	 this.servicioLibroDiario.GetmensualPorTrabajador({'id':this.selectedPersonId, 
		      	 										   'mes': this.mes, 
		      	 										   'anio': this.anio,
		      	 										   'id_trabajador': this.selectedPersonId }).
      	 			subscribe( (data)=> {
			      	console.log(data);
			      	this.movimiento = data;
			      } );

      }else{
      	alert("selecciona trabajador")
      }
     
  }


 onChange(e){

  	console.log(e)
  	this.nombreSeleccion = e.nombre;
  	this.apellidoSeleccion = e.apellido;


  }


}
