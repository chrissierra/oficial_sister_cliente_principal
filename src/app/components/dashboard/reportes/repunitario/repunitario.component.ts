import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LibroremuneracionesService } from '../../../../services/libroremuneraciones.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-repunitario',
  templateUrl: './repunitario.component.html',
  styleUrls: ['./repunitario.component.css']
})
export class RepunitarioComponent implements OnInit {
	public id:any;
	public datosUnitarios: datosUnitario;
  constructor(	private LibroremuneracionesService_: LibroremuneracionesService,
	            private param: ActivatedRoute, 
	            private router : Router) { 

  	this.id = {
                'id':	this.param.snapshot.paramMap.get('id')
              };

    this.LibroremuneracionesService_.getmovimientounitario(this.id)
    .subscribe((data: any) => {
	    	this.datosUnitarios = {
	    		content: data[0]
	    	}
    });

  }

  ngOnInit() {
  }

}

interface datosUnitario {
	content:any
}
