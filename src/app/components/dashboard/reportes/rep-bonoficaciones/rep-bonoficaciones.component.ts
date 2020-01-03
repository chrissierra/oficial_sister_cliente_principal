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
import { CrudService } from './../../../../services/crud.service';

@Component({
  selector: 'app-rep-bonoficaciones',
  templateUrl: './rep-bonoficaciones.component.html',
  styleUrls: ['./rep-bonoficaciones.component.css']
})
export class RepBonoficacionesComponent {

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
              public CrudService_:CrudService) {

  	  	this.nombreEmpresa = localStorage.getItem("nombre_empresa");

   }


      ActualizarFecha(){
      
      const FORMATO_ENTRADA = 'MM-DD-YYYY';
      const FORMATO_SALIDA = 'MM-YYYY';
      const fecha1 = moment(this.calendario, FORMATO_ENTRADA);
      //alert(fecha1.format(FORMATO_SALIDA));
      this.CrudService_.Add({'id':  this.sucursal},'GetResExtra_porSucursal' ).subscribe( (data:any[])=> {
      	console.log(data);
        if(data.length === 0) return this.MensajesSwalService_.error();
      	this.movimiento = data;
      }, (error) =>  { 
      	this.MensajesSwalService_.error();
      	console.log(error)
      });
  }

exportAsExcel()
    {

       this.exportAsExcelFile(this.movimiento, 'Asistencia'); 
     

    }


  SucursalSelected(e){
      
               this.sucursal = e

      } // Fin getFromState





       ActualizarPorSucursal(){
           // this.geolocalizacion.findAddressByCoordinates( -33.4067802, -70.668223);     
           // this.arrayDirecciones = this.geolocalizacion.array_direccion;
            const FORMATO_ENTRADA = 'MM-DD-YYYY';
            const FORMATO_SALIDA = 'MM-DD-YYYY';
            const fecha1 = moment(this.calendario, FORMATO_ENTRADA);
	      	console.log(this.sucursal)
	      this.CrudService_.Add({'id':  this.sucursal, 'mes': this.mes, 'anio': this.anio},'GetResExtra_porSucursal' ).subscribe( (data:any[])=> {
	      	console.log(data);
	        if(data.length === 0) return this.MensajesSwalService_.error();
	      	this.movimiento = data;
	      }, (error) =>  { 
	      	this.MensajesSwalService_.error();
	      	console.log(error)
	      });
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

