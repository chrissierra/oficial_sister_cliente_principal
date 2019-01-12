import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-pasouno',
  templateUrl: './pasouno.component.html',
   host: {'window:beforeunload':'alert("asdfasfd")'}

})
export class PasounoComponent implements OnInit {

  constructor(  private router: Router, 
  				private param: ActivatedRoute,) { }

  formato:any;

  ngOnInit() {
  }


  funcion_paso2(){
    if(this.formato == undefined) return this.mensajeError();

    this.router.navigate(['./Ingresa/paso2/'+this.formato]);
  }

  mensajeError(){
     return swal({
          title: 'Error',
          text: 'Selecciona una opción',
          type: 'error',
          confirmButtonText: 'Ok'
        })
  }
}
