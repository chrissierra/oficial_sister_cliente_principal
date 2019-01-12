import { Component, OnInit } from '@angular/core';
import { LibroremuneracionesService } from './../../services/libroremuneraciones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

rut_empresa: string = localStorage.getItem('rut_empresa');
nombre_empresa: string = localStorage.getItem('nombre_empresa');
nombre_rep: string = localStorage.getItem('nombre_rep');
public ultimosIngresos:ultimosIngresos;
public url:any;
constructor(public LibroremuneracionesService_: LibroremuneracionesService) {
    let fecha = new Date();
    const hoy = (fecha.getMonth() + 1)  + '-' + fecha.getDate() + '-' + fecha.getFullYear();
    console.log("fecha", hoy)
    this.rut_empresa = localStorage.getItem('rut_empresa');
    this.LibroremuneracionesService_.GetdiarioUltimos({'id': this.nombre_empresa, 'dia': hoy, 'ultimosN':5 })
    .subscribe( (data) => {
      console.log("DATA", data)
       
                      this.ultimosIngresos={
                        info: data
                      } 

            
    } );
        this.url = "https://sister.cl/clientes_rrhh/"+ this.rut_empresa + "/registro/" + this.rut_empresa + ".jpg"

   } // Fin constructor

  ngOnInit() {
  }

}

interface ultimosIngresos{
  info: any;
}
