import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LibroremuneracionesService } from '../../../services/libroremuneraciones.service';
import { MensajesSwalService } from './../../../services/mensajes-swal.service';
import { GuardarSucursalService } from './../../../services/guardar-sucursal.service';
import { Store } from '@ngrx/store';
import * as fromMarcaje from '../../marcaje.actions';
import { AppState } from '../../../app.reducers';
@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {
	public sucursal:any;
	public Seleccion:sucursalSeleccionada;
	public nombreEmpresa:any;
	public boleanoSucursal:boolean=false;
	public titulo = "SUCURSALES";
	public subtitulo ="Edita el número de telefono de tu sucursal."
  constructor(	public MensajesSwalService_: MensajesSwalService,
  				private GuardarSucursalService_: GuardarSucursalService,
  				private store: Store<AppState>,
  				private LibroremuneracionesService_: LibroremuneracionesService,
	            private param: ActivatedRoute, 
	            private router : Router,
	            public GuardarSucursalService:GuardarSucursalService) {


							this.nombreEmpresa = localStorage.getItem('nombre_empresa');
	             }

  ngOnInit() {
  }

		actualizarSucursal(){
				this.getFromState();
				//alert(this.sucursal);
				this.GuardarSucursalService_.get_sucursales_servidor(JSON.stringify({usuario: this.nombreEmpresa }))
					.subscribe(( data:any[]) => {
						for (var i = 0; i < data.length; ++i) {
							console.log(data[i]['id'])
							if(data[i]['id'] === (this.sucursal*1)){
								this.boleanoSucursal = true;
								//alert(this.boleanoSucursal)
								this.Seleccion = {
									info:data[i]
								} 
								console.log(this.Seleccion)
							}
						}
					} );

					//alert("el valor de boleanoSucursal " + this.boleanoSucursal)
		}

   getFromState(){
            this.store.select('marcaje')
          .subscribe( marcaje  => {       
               this.sucursal = marcaje.Sucursal;
          });
    } // Fin getFromState


    actualizarBBDDSucursal(){
    	alert(this.Seleccion.info.telefono)
    	this.GuardarSucursalService_.update_sucursales({'id': this.sucursal, 'telefono': this.Seleccion.info.telefono})
    	.subscribe( data=>{
    		console.log(data['estatus'])
    		if(data['estatus']){
    					this.MensajesSwalService_.mensajeStandar({
				    			titulo:'Cambio Realizado',
				    			texto: 'El número de teléfono se ha editado satisfactoriamente',
				    			tipo:'success',
				    			boton:'OK'
				    		});

    					this.router.navigate(['./DashBoard'])
    		} 
    	} )
    }


}

interface sucursalSeleccionada {
	info:any;
}
