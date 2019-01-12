import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import * as moment from 'moment';
import { LibroremuneracionesService } from '../../../../services/libroremuneraciones.service';
import { GeolocalizacionService } from '../../../../services/geolocalizacion.service';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
declare var google: any;
import * as XLSX from 'xlsx';
import { Store } from '@ngrx/store';
import * as fromMarcaje from '../../../marcaje.actions';
import { AppState } from '../../../../app.reducers';
@Component({
  selector: 'app-repasistenciadiario',
  templateUrl: './repasistenciadiario.component.html',
  styleUrls: ['./repasistenciadiario.component.css']
})
export class RepasistenciadiarioComponent  {
	public nombreEmpresa:any;	
	public calendario:any;
	public movimiento:any;
  public arrayDirecciones:any;
  public geocoder:any;
  public movimientos: any[] = [];
  public mes:any = 'mes';
  public sucursal:any;
  public anio:any;
  @ViewChild('TABLE') table: ElementRef;
  constructor(private store: Store<AppState>,
              public servicioLibroDiario:LibroremuneracionesService,
              public geolocalizacion: GeolocalizacionService,
              public mapsApiLoader: MapsAPILoader,
              private wrapper: GoogleMapsAPIWrapper) {
           this.mapsApiLoader.load().then(() => {
            this.geocoder = new google.maps.Geocoder();
          });
  	  	this.nombreEmpresa = localStorage.getItem("nombre_empresa");

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


      public exportAsExcelFile(json: any[], excelFileName: string): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
        XLSX.writeFile(workbook, this.toExportFileName(excelFileName));
      }


      public toExportFileName(excelFileName: string): string {
        return `${excelFileName}_export_${new Date().getTime()}.xlsx`;
      }

      ActualizarFecha(){

           // this.geolocalizacion.findAddressByCoordinates( -33.4067802, -70.668223);     
           // this.arrayDirecciones = this.geolocalizacion.array_direccion;

            const FORMATO_ENTRADA = 'MM-DD-YYYY';
            const FORMATO_SALIDA = 'MM-DD-YYYY';
            const fecha1 = moment(this.calendario, FORMATO_ENTRADA);
          //  alert(fecha1.format(FORMATO_SALIDA));
            this.servicioLibroDiario.GetLibroDiario({'id': this.nombreEmpresa, 'dia': fecha1.format(FORMATO_SALIDA) }).subscribe( (data)=> {
            	console.log(data);
            	this.movimiento = data;
            } );


      }


       ActualizarPorSucursal(){

           // this.geolocalizacion.findAddressByCoordinates( -33.4067802, -70.668223);     
           // this.arrayDirecciones = this.geolocalizacion.array_direccion;
           this.getFromState();
            const FORMATO_ENTRADA = 'MM-DD-YYYY';
            const FORMATO_SALIDA = 'MM-DD-YYYY';
            const fecha1 = moment(this.calendario, FORMATO_ENTRADA);
            console.log(fecha1.format(FORMATO_SALIDA))
            console.log(this.nombreEmpresa)
            console.log(this.sucursal)
          //  alert(fecha1.format(FORMATO_SALIDA));
            this.servicioLibroDiario.GetdiarioPorSucursal({'id': this.nombreEmpresa, 
                                                            'dia': fecha1.format(FORMATO_SALIDA),
                                                            'sucursal': this.sucursal  }).subscribe( (data)=> {
              console.log(data);
              this.movimiento = data;
            } );


      }


      getFromState(){
            this.store.select('marcaje')
          .subscribe( marcaje  => {       
               this.sucursal = marcaje.Sucursal;
          });

          console.log("this.sucursal", this.sucursal);
      } // Fin getFromState





}
