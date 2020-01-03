import { Component, ViewChild, ElementRef  } from '@angular/core';
import * as moment from 'moment';
import { LibroremuneracionesService } from '../../../../services/libroremuneraciones.service';
import { SueldosService } from '../../../../services/sueldos.service';
import * as XLSX from 'xlsx';
import { Store } from '@ngrx/store';
import * as fromMarcaje from '../../../marcaje.actions';
import { AppState } from '../../../../app.reducers';
import { PlanillaservicesService } from './../../../../services/planillaservices.service';
import { Observable, of, forkJoin } from 'rxjs'; 
import { MensajesSwalService, TipoMensaje } from './../../../../services/mensajes-swal.service';

@Component({
  selector: 'app-repturnosincompletos',
  templateUrl: './repturnosincompletos.component.html',
  styleUrls: ['./repturnosincompletos.component.css']
})
export class RepturnosincompletosComponent {
	public selectedPersonId:any;
	public idTrabajador:any;
	public arrayNombres:any[];
	public nombreSeleccion:any;
	public apellidoSeleccion:any;
	public sucursal:any;
	public mes:any = 'mes';
	public anio:any;
	public nombreEmpresa:any = localStorage.getItem("nombre_empresa");
	public datosTrabajadores:DatosTrabajadores = { info: [] };
	public DatosAsistencia:DatosDeAsistencia;
	@ViewChild('TABLE', { static: true }) table: ElementRef;

  constructor(	public MensajesSwalService_: MensajesSwalService,
  				private SueldosService_: SueldosService,
  				private planillaServicio_: PlanillaservicesService,
  				private store: Store<AppState>,
              	public servicioLibroDiario:LibroremuneracionesService) 
  	{ 
   	  	this.nombreEmpresa = localStorage.getItem("nombre_empresa");
  	    this.planillaServicio_.obtener_planilla(localStorage.getItem('nombre_empresa'))
		  	.subscribe(( data: any[]) => {
		  		
		  		this.arrayNombres = data;
		  		
		  		
		  	} );
	} // Fin constructor


	actSucursal(){
		this.getFromState()
		//alert(this.sucursal)
			this.servicioLibroDiario.TurnosSinTerminarPorSucursal(this.nombreEmpresa, this.mes, this.anio , this.sucursal)
				.subscribe( data => {
						if( data['turnosSinTerminar'].length === 0 ) this.error()
						console.log(data)
						this.datosTrabajadores = {
							info: data['turnosSinTerminar']
						}
				})
	}
	
	actTrabajador(){
				this.servicioLibroDiario.TurnosSinTerminarPorTrabajador(this.idTrabajador, this.mes, this.anio)
				.subscribe( data => {
					if( data['turnosSinTerminar'].length === 0 ) this.error()
						console.log(data)
						this.datosTrabajadores = {
							info: data['turnosSinTerminar']
						}
				} )
	}
	
	ActTodo(){
			this.servicioLibroDiario.TurnosSinTerminar(this.nombreEmpresa, this.mes, this.anio )
				.subscribe( data => {
					if( data['turnosSinTerminar'].length === 0 ) this.error()
						console.log(data)
						this.datosTrabajadores = {
							info: data['turnosSinTerminar']
						}
				} )
	}


	onChange(e){
  			console.log(e)
  			this.nombreSeleccion = e.nombre;
  			this.apellidoSeleccion = e.apellido;
  			this.idTrabajador = e.id;
  	}	


  	getFromState(){
            this.store.select('marcaje')
          	.subscribe( marcaje  => {       
               this.sucursal = marcaje.Sucursal;
         	 });

         	 console.log("this.sucursal", this.sucursal);
    } // Fin getFromState

    error(){
    	this.MensajesSwalService_.mensajeStandar({
    		titulo:'Error',
    		texto: 'Debes marcar todos los campos necesarios para tu consulta. También es posible que no hayan datos para tu consulta. Verifícalo',
    		tipo: 'error',
    		boton: 'Ok'
    	})
    }


        exportAsExcel(){
      let ws: XLSX.WorkSheet= XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
      let wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Asistencia mensual');
      XLSX.writeFile(wb, 'Asistencia'+this.mes+'_'+this.anio+'.xlsx');
    }
/*
  	private generarArray(data, mes, anio){
  		let arrayDatosAsistencia = new Array();
  		
      let observables: Observable<T>[] = [];

  		data.map(value => {
						  		observables.push(this.SueldosService_.getDiasTrabajados(value.id, mes, anio));
			});

  		forkJoin(observables)
	    .subscribe(dataArray => {
	        // All observables in `observables` array have resolved and `dataArray` is an array of result of each observable
	   		console.log("En forkjoin", dataArray)
	   		this.DatosAsistencia = { info: dataArray }; 
	    });
  			this.datosTrabajadores = { info: data };
  	}




 onChange(e){

  	console.log(e)
  	this.nombreSeleccion = e.nombre;
  	this.apellidoSeleccion = e.apellido;


  }


    ActualizarFecha(){
	        this.planillaServicio_.obtener_planilla(this.nombreEmpresa).subscribe((data:any[]) => {
               // this.datosTrabajadores = { info: data };

                this.generarArray(data, this.mes, this.anio);
          	});
  	}// Fin funcion actualizar Fecha






*/

} // Fin CLASE *******************************************************


interface DatosTrabajadores {
	info:any;
}
interface DatosDeAsistencia {
	info: any;
}
interface T{

}