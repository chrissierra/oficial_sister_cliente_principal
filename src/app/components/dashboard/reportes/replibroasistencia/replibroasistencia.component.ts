import { LibroremuneracionesService } from '../../../../services/libroremuneraciones.service';
import {MatDatepicker} from '@angular/material/datepicker';
import { Moment} from 'moment';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import * as XLSX from 'xlsx';
import { Store } from '@ngrx/store';
import * as fromMarcaje from '../../../marcaje.actions';
import { AppState } from '../../../../app.reducers';
import { distinct } from 'rxjs/operators';
import { find } from 'rxjs/operators';
import { PlanillaservicesService } from './../../../../services/planillaservices.service';
import { Observable, of, forkJoin } from 'rxjs'; 
import { MensajesSwalService } from './../../../../services/mensajes-swal.service';


@Component({
  selector: 'app-replibroasistencia',
  templateUrl: './replibroasistencia.component.html',
  styleUrls: ['./replibroasistencia.component.css']
})
export class ReplibroasistenciaComponent  {

	public nombreEmpresa:any;	
	public calendario:any;
	public movimiento:any;
	public mes:any = 'mes';
	public anio:any;
	public date = new FormControl();
 	public sucursal:any;
	public movimientos: any[] = [];
  	public fechas_Libro:any[] = [];
  	public trabajadores:any[]=[];
  	public columnDefs: any;
	public rowData: any;
  public responseForkJoin:any;
  @ViewChild('TABLE', { static: true }) table: ElementRef;

  constructor(public MensajesSwalService_: MensajesSwalService,
              public PlanillaservicesService_: PlanillaservicesService,
              private store: Store<AppState>,
              public servicioLibroDiario:LibroremuneracionesService) {

  	  	this.nombreEmpresa = localStorage.getItem("nombre_empresa");
  	    

   }


     private generarArray(data, mes, anio){
        let observables: Observable<any>[] = [];
        data.map(value => {
                    observables.push(this.servicioLibroDiario.LibroTipoPlanillaAsistencia(value.id, mes, anio));
        });

        forkJoin(observables)
        .subscribe((dataArray:any[]) => {
                         if(dataArray.length === 0) return this.MensajesSwalService_.error();

           console.log("En forkjoin", dataArray)
           this.trabajadores = dataArray;
           this.responseForkJoin = dataArray;
        });



     }


      ActualizarFecha(){

        this.fechas_Libro = [];
        
       for (var i = 1; i <= new Date(this.anio, this.mes, 0).getDate() ; ++i) {
         // code...
         this.fechas_Libro.push(`${i} de ${this.servicioLibroDiario.getMesesPorNumero(this.mes)}/${this.anio}`)
       }



       this.PlanillaservicesService_.obtener_planilla(this.nombreEmpresa).subscribe((data:any[]) => {
               // this.datosTrabajadores = { info: data };
               console.log(data)
                this.generarArray(data, this.mes, this.anio);
                //this.trabajadores = data;
       });

     
  }

exportAsExcel()
    {

       this.exportAsExcelFile(this.movimientos, 'Asistencia'); 
      let ws: XLSX.WorkSheet= XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
      let wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Asistencia mensual');

      /* save to file */  
      XLSX.writeFile(wb, 'Asistencia'+this.mes+'_'+this.anio+'.xlsx');

    }


  getFromState(){
            this.store.select('marcaje')
	          .subscribe( marcaje  => {       
	               this.sucursal = marcaje.Sucursal;
	          });

      } // Fin getFromState





       ActualizarPorSucursal(){
            this.getFromState();
            const FORMATO_ENTRADA = 'MM-DD-YYYY';
            const FORMATO_SALIDA = 'MM-DD-YYYY';
            const fecha1 = moment(this.calendario, FORMATO_ENTRADA);
            this.servicioLibroDiario.GetmensualPorSucursal({'id': this.nombreEmpresa, 'mes': this.mes, 'anio': this.anio,
                                                            'sucursal': this.sucursal  }).subscribe( (data)=> {
              this.movimiento = data;
            } );
      }

      public exportAsExcelFile(json: any[], excelFileName: string): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
       // XLSX.writeFile(workbook, this.toExportFileName(excelFileName));
      }


      public toExportFileName(excelFileName: string): string {
        return `${excelFileName}_export_${new Date().getTime()}.xlsx`;
      }



}
