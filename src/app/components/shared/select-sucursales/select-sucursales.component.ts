import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { GuardarSucursalService } from '../../../services/guardar-sucursal.service';
import { Store } from '@ngrx/store';
import * as fromMarcaje from '../../marcaje.actions';
import { AppState } from '../../../app.reducers';
@Component({
  selector: 'app-select-sucursales',
  templateUrl: './select-sucursales.component.html',
  styleUrls: ['./select-sucursales.component.css']
})
export class SelectSucursalesComponent implements OnInit {
	
	datosTrabajador:any;
	sucursales:any;
	SucursalElegida:any;
  nombreEmpresa:any;
  @Input() public LabelSelect: string;
  @Output() onSucursalSelected: EventEmitter<any>;
  constructor(	private GuardarSucursalService_: GuardarSucursalService,
  				      private store: Store<AppState>) 
  { 
  		this.nombreEmpresa = localStorage.getItem('nombre_empresa');
     
      this.onSucursalSelected = new EventEmitter();

  		this.getSucursal();



  }

  ngOnInit(){
    console.log(this.LabelSelect)
      if(this.LabelSelect === undefined){
        this.LabelSelect = "Sucursales"
      }
  }





  getSucursal(){
		this.GuardarSucursalService_.get_sucursales_servidor(JSON.stringify({usuario:  this.nombreEmpresa }))
		.subscribe( data => {
			console.log(data)
			this.sucursales = data;
		} )
	} // Fin GetSucursal



	onChange(e, select){
		  console.log("evento..", e)
    	console.log("select..", select)
    	console.log("SucursalElegida", this.SucursalElegida)
      this.onSucursalSelected.emit(this.SucursalElegida);
    	const accion = new fromMarcaje.ACTUALIZARSUCURSALAction(this.SucursalElegida);
    	this.store.dispatch( accion );

      for (var i = 0; i < this.sucursales.length; ++i) {
        // code...

        if(this.sucursales[i].id === (this.SucursalElegida*1) ){
                console.log("los id... ", this.sucursales[i].id)
                const accion2 = new fromMarcaje.ACTUALIZARLOCACIONAction(this.sucursales[i]);
                this.store.dispatch( accion2 );
        }
      }



	}

}
