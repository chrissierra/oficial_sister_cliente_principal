import { Component, OnInit } from '@angular/core';
import { PlanillaservicesService } from './../../../services/planillaservices.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html'
})
export class ReportesComponent implements OnInit {
	
	public nombreEmpresa:any;

  constructor(public PlanillaservicesService_ :PlanillaservicesService) {

  	this.nombreEmpresa = localStorage.getItem("nombre_empresa");
  	this.PlanillaservicesService_.obtener_planilla(localStorage.getItem('nombre_empresa'))
		  	.subscribe(( data: any[]) => {
		  		
		  		localStorage.setItem('ListadoTrabajadores', JSON.stringify(data));
		  		
		  	} );
   }

  ngOnInit() {
  }





  
}
