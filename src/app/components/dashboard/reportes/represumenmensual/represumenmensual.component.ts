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
import { MensajesSwalService } from './../../../../services/mensajes-swal.service';

@Component({
  selector: 'app-represumenmensual',
  templateUrl: './represumenmensual.component.html',
  styleUrls: ['./represumenmensual.component.css']
})
export class RepresumenmensualComponent  {
	

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
  {} // Fin constructor


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







  	private generarArray1(data, mes, anio){



  		let obs = new Observable( observer => {
  		let arrayDatosAsistencia = new Array();
  		//data.map(value => {
		//				  		this.SueldosService_.getDiasTrabajados(value.id, mes, anio).subscribe((datos:any[])=>{						  			
		//				  			arrayDatosAsistencia.push(datos)
		//				  		});
		//			  	});
  		//this.DatosAsistencia = { info: arrayDatosAsistencia }; 
  		console.log("Tamaño del lenght de trabajdores", data.length)
  		for (var i = 0; i < data.length; ++i) {
  		 	// code...

  		 	this.SueldosService_.getDiasTrabajados(data[i].id, mes, anio).subscribe((datos:any[])=>{					  			
					  			arrayDatosAsistencia.push(datos)
						  		});

  		 } 
  		observer.next(arrayDatosAsistencia);
  	} )		

  	obs.subscribe( arrayAsistencia => {
  		console.log(arrayAsistencia)
  		this.DatosAsistencia = { info: arrayAsistencia };
  		console.log("Para analizar el array asistencia", arrayAsistencia)
  		console.log("Para analizar el array de datos ", data)
  		this.datosTrabajadores = { info: data };
  	})
  		
  }	// Fin función generarArray


    ActualizarFecha(){
	        this.planillaServicio_.obtener_planilla(this.nombreEmpresa).subscribe((data:any[]) => {
               // this.datosTrabajadores = { info: data };
                 if(data.length === 0) return this.MensajesSwalService_.error();

                this.generarArray(data, this.mes, this.anio);
          	}, (error) =>   this.MensajesSwalService_.error() );
  	}// Fin funcion actualizar Fecha


  	getFromState(){
            this.store.select('marcaje')
          	.subscribe( marcaje  => {       
               this.sucursal = marcaje.Sucursal;
         	 });

         	 console.log("this.sucursal", this.sucursal);
      } // Fin getFromState


    exportAsExcel(){
      let ws: XLSX.WorkSheet= XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
      let wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Asistencia mensual');
      XLSX.writeFile(wb, 'Asistencia'+this.mes+'_'+this.anio+'.xlsx');
    }


} // Fin CLASE *******************************************************


interface DatosTrabajadores {
	info:any;
}
interface DatosDeAsistencia {
	info: any;
}
interface T{

}