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
import { MensajesSwalService } from './../../../../services/mensajes-swal.service';

@Component({
  selector: 'app-repasistenciamensual',
  templateUrl: './repasistenciamensual.component.html',
  styleUrls: ['./repasistenciamensual.component.css']
})
export class RepasistenciamensualComponent {

	public nombreEmpresa:any;	
	public calendario:any;
	public movimiento:any;
	public mes:any = 'mes';
	public anio:any;
	public date = new FormControl();
  public sucursal:any;
	public movimientos: any[] = [];
  @ViewChild('TABLE', { static: true }) table: ElementRef;

  constructor(public MensajesSwalService_: MensajesSwalService,
              private store: Store<AppState>,
              public servicioLibroDiario:LibroremuneracionesService) {

  	  	this.nombreEmpresa = localStorage.getItem("nombre_empresa");

   }


      ActualizarFecha(){
      
      const FORMATO_ENTRADA = 'MM-DD-YYYY';
      const FORMATO_SALIDA = 'MM-YYYY';
      const fecha1 = moment(this.calendario, FORMATO_ENTRADA);
      //alert(fecha1.format(FORMATO_SALIDA));
      this.servicioLibroDiario.GetLibroMensual({'id': this.nombreEmpresa, 'mes': this.mes, 'anio': this.anio }).subscribe( (data:any[])=> {
      	console.log(data);
        if(data.length === 0) return this.MensajesSwalService_.error();
      	this.movimiento = data;
      }, (error) =>   this.MensajesSwalService_.error() );
  }

exportAsExcel()
    {

       this.exportAsExcelFile(this.movimiento, 'Asistencia'); 
     

    }


  getFromState(){
            this.store.select('marcaje')
          .subscribe( marcaje  => {       
               this.sucursal = marcaje.Sucursal;
          });

          console.log("this.sucursal", this.sucursal);
      } // Fin getFromState





       ActualizarPorSucursal(){
           // this.geolocalizacion.findAddressByCoordinates( -33.4067802, -70.668223);     
           // this.arrayDirecciones = this.geolocalizacion.array_direccion;
           this.getFromState();
            const FORMATO_ENTRADA = 'MM-DD-YYYY';
            const FORMATO_SALIDA = 'MM-DD-YYYY';
            const fecha1 = moment(this.calendario, FORMATO_ENTRADA);
          //  alert(fecha1.format(FORMATO_SALIDA));
            this.servicioLibroDiario.GetmensualPorSucursal({'id': this.nombreEmpresa, 'mes': this.mes, 'anio': this.anio,
                                                            'sucursal': this.sucursal  }).subscribe( (data:any[])=> {
             if(data.length === 0) return this.MensajesSwalService_.error();
              console.log(data);
              this.movimiento = data;
            }, (error) =>   this.MensajesSwalService_.error() );
      }

      public exportAsExcelFile(json: any[], excelFileName: string): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
        XLSX.writeFile(workbook, this.toExportFileName(excelFileName));
      }


      public toExportFileName(excelFileName: string): string {
        return `${excelFileName}_export_${new Date().getTime()}.xlsx`;
      }



}
