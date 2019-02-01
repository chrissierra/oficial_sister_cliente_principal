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
import { MensajesSwalService, TipoMensaje } from './../../../../services/mensajes-swal.service';

@Component({
  selector: 'app-repofflinemensual',
  templateUrl: './repofflinemensual.component.html',
  styleUrls: ['./repofflinemensual.component.css']
})
export class RepofflinemensualComponent {

	public nombreEmpresa:any;	
	public calendario:any;
	public movimiento:any;
	public mes:any = 'mes';
	public anio:any;
	public date = new FormControl();
  	public sucursal:any;
	public movimientos: any[] = [];
  @ViewChild('TABLE') table: ElementRef;

  constructor(public MensajesSwalService_: MensajesSwalService,
              private store: Store<AppState>,
              public servicioLibroDiario:LibroremuneracionesService) {

  	  	this.nombreEmpresa = localStorage.getItem("nombre_empresa");

   }


    error(){
      this.MensajesSwalService_.mensajeStandar({
        titulo:'Error',
        texto: 'Completa todos los campos necesario.',
        tipo: 'error',
        boton: 'Ok'
      })
    } // FIN Función Error


    errorVacio(){
      this.MensajesSwalService_.mensajeStandar({
        titulo:'Error',
        texto: 'No hay datos para tu consulta.',
        tipo: 'warning',
        boton: 'Ok'
      })
    } // FIN Función Error

      ActualizarFecha(){
      
      const FORMATO_ENTRADA = 'MM-DD-YYYY';
      const FORMATO_SALIDA = 'MM-YYYY';
      const fecha1 = moment(this.calendario, FORMATO_ENTRADA);
      //alert(fecha1.format(FORMATO_SALIDA));
      this.servicioLibroDiario.getMovimientosOfflineMensual({'id': this.nombreEmpresa, 'mes': this.mes, 'anio': this.anio }).subscribe( (data:any[])=> {
      	if( data.length === 0 ) this.errorVacio()
        console.log(data);
      	this.movimiento = data;
      } , (error) =>  this.error());
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
            this.servicioLibroDiario.getMovimientosOfflineMensual({'id': this.nombreEmpresa, 'mes': this.mes, 'anio': this.anio,
                                                            'sucursal': this.sucursal  }).subscribe( (data:any[])=> {
              if( data.length === 0 ) this.errorVacio()
              console.log(data);
              this.movimiento = data;
            } , (error) =>  this.error());
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
