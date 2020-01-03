import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-visualizador-contrastado-registros',
  templateUrl: './visualizador-contrastado-registros.component.html',
  styleUrls: ['./visualizador-contrastado-registros.component.css']
})
export class VisualizadorContrastadoRegistrosComponent implements OnInit {
	 @Input()  urlMovimiento:any;
	 @Input() rut:any
	 public urlRegistro:any;
  constructor() { }

  ngOnInit() {
  	this.urlRegistro = 'https://sister.cl/trabajadores/'+ this.rut +'/registro/'+ this.rut +'.jpg?id='+ new Date().getTime()
  }

}
