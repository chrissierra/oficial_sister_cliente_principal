import { Component, OnInit, Input } from '@angular/core';
import { LibroremuneracionesService } from './../../../services/libroremuneraciones.service';

@Component({
  selector: 'app-visualizacion-contrastada',
  templateUrl: './visualizacion-contrastada.component.html',
  styleUrls: ['./visualizacion-contrastada.component.css']
})
export class VisualizacionContrastadaComponent implements OnInit {
	@Input() rut: any;
	@Input() url: any;
	public url0:any;
	public url1:any;
  constructor(private LibroremuneracionesService_: LibroremuneracionesService) {
  	



   }

  ngOnInit() {
  	  	console.log("rut", this.rut)
	  	console.log("url", this.url)
	  	this.url0 = this.url;
	  	this.url1 = 'https://sister.cl/trabajadores/'+ this.rut +'/registro/'+ this.rut +'.jpg?id='+ new Date().getTime()

  }

}
