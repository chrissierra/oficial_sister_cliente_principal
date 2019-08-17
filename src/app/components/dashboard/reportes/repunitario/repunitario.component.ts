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
  public url:any;
  constructor(	private LibroremuneracionesService_: LibroremuneracionesService,
  	            private param: ActivatedRoute, 
  	            private router : Router) { 

  	this.id = {
                'id':	this.param.snapshot.paramMap.get('id')
              };
    
    //this.url = "https://sister.cl/clientes_rrhh/"+ this.rut + "/registro/" + this.rut + ".jpg"
    this.LibroremuneracionesService_.getmovimientounitario(this.id)
    .subscribe((data: any) => {
        console.log("DAtos del movimiento unitario...*****", data)
        //this.url = "https://sister.cl/clientes_rrhh/"+ data[0].rut + "/registro/" + data[0].rut + ".jpg";
        //this.urlImagenTrabajador =  'https://sister.cl/trabajadores/'+ data[0].rut +'/registro/'+ data[0].rut +'.jpg?id='+ new Date().getTime() ;

	    	this.datosUnitarios = {
	    		content: data[0],
          url: 'https://sister.cl/trabajadores/'+ data[0].rut +'/registro/'+ data[0].rut +'.jpg?id='+ new Date().getTime()
	    	}
    });

  }

  ngOnInit() {
  }

}

interface datosUnitario {
	content:any,
  url:any;
}
