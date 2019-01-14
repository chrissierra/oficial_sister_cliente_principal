import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

	@Input() titulo: any;
	@Input() subtitulo: any;
  constructor() { }

  ngOnInit() {
  }

}
