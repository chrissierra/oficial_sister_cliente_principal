import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LibroremuneracionesService } from './../../../../services/libroremuneraciones.service';
import { MensajesSwalService } from './../../../../services/mensajes-swal.service';
import { Store } from '@ngrx/store';
import * as fromMarcaje from './../../../marcaje.actions';
import { AppState } from './../../../../app.reducers';
import { DeviceDetectorService } from 'ngx-device-detector';
import { PlanillaservicesService } from './../../../../services/planillaservices.service';
@Component({
  selector: 'app-repactualmentetrabajando',
  templateUrl: './repactualmentetrabajando.component.html',
  styleUrls: ['./repactualmentetrabajando.component.css']
})
export class RepactualmentetrabajandoComponent implements OnInit {
	public nombre_empresa: string = localStorage.getItem('nombre_empresa');
	public sucursal:any;
	public Trabajadores:TrabajadoresActualmenteTrabajando;
	public deviceInfo = null;
  public DatosSucursal:any;
  public datosTrabajadores:any;
  constructor(	private deviceService: DeviceDetectorService,
      				public MensajesSwalService_: MensajesSwalService,
      				private store: Store<AppState>,
              private planillaServicio_: PlanillaservicesService,
      				private LibroremuneracionesService_: LibroremuneracionesService,
	            private param: ActivatedRoute, 
	            private router : Router,) {
          this.Trabajadores = {info: ''}
          this.planillaServicio_.obtener_planilla(this.nombre_empresa).subscribe((data:any[]) => {
                this.datosTrabajadores = data;
                console.log(data)
          });



               }

  ngOnInit() {
  }

  actualizarTabla(){
  	this.getFromState()
  	this.LibroremuneracionesService_.actualmenteTrabajandoPorSucursal({'id': this.nombre_empresa, 'sucursal': this.sucursal})
  	.subscribe((data: any[]) => {

      if(data.length === 0) return this.error();
  		console.log('this.Trabajadores = { info: data };',data)
  		this.Trabajadores = { info: data };
      console.log(this.Trabajadores.info)
  	})
  }

     getFromState(){
            this.store.select('marcaje')
          .subscribe( marcaje  => {       
               this.sucursal = marcaje.Sucursal;
               this.DatosSucursal = marcaje.locacion;
          });
    } // Fin getFromState

     error(){
      this.MensajesSwalService_.mensajeStandar({
        titulo:'Error',
        texto: 'Debes marcar todos los campos necesarios para tu consulta. También es posible que no hayan datos para tu consulta. Verifícalo',
        tipo: 'error',
        boton: 'Ok'
      })
    }



     public detectDevice() {
	    this.deviceInfo = this.deviceService.isMobile();    
	    console.log( this.deviceService.getDeviceInfo())
	    console.log(this.deviceService.isMobile())
	 } // Fin detectDevice



   getNumeroTrabajador(id){
     console.log(id)
     for (var i = 0; i < this.datosTrabajadores.length; ++i) {
        if( this.datosTrabajadores[i].id === ( id * 1 )    ){
            if(this.datosTrabajadores[i].fono1 !== null){
              return this.datosTrabajadores[i].fono1
              }else{
                 return '';
              }
        }else{
         
        } 
     }

   }

} // *** fIN CLASE

interface TrabajadoresActualmenteTrabajando {
	info: any;
}
