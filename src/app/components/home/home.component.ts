import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibroremuneracionesService } from './../../services/libroremuneraciones.service';
import { CrudService } from './../../services/crud.service';
import { Store } from '@ngrx/store';
import * as fromMarcaje from './../marcaje.actions';
import { AppState } from './../../app.reducers';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnDestroy, OnInit {

public rut_empresa: string = localStorage.getItem('rut_empresa');
public nombre_empresa: string = localStorage.getItem('nombre_empresa');
public nombre_rep: string = localStorage.getItem('nombre_rep');
public ultimosIngresos:ultimosIngresos;
public url:any;
public intervalo:any;
public actualmenteTrabajando:any;
public boolean_distancia_alerta:boolean = false;
public boolean_biometrico_alerta:boolean=false;
public sucursal:any = false;
public cantidad_trabajadores:any = false;
public boleanoLoader:boolean= false;
public  array_dias:string[] = [
  'nada', 'Lunes',  'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'
  ];
constructor(  public CrudService_: CrudService,
              private store: Store<AppState>,
              public LibroremuneracionesService_: LibroremuneracionesService) {
        



   } // Fin constructor

   ngOnInit(){

        this.actualmenteTrabajando = { info:[] }

        this.ultimosIngresos={ info: [] } 
        
        this.rut_empresa = localStorage.getItem('rut_empresa');
                   
        this.url = "https://sister.cl/clientes_rrhh/"+ this.rut_empresa + "/registro/" + this.rut_empresa + ".jpg"

       let fecha = new Date();
      
       const hoy = (fecha.getMonth() + 1)  + '-' + fecha.getDate() + '-' + fecha.getFullYear();

       this.LibroremuneracionesService_.GetdiarioUltimos({'id': this.nombre_empresa, 'dia': hoy, 'ultimosN':5 })
        .subscribe( (data:any[]) => { 

                          data.map(value => {
                            if(value.distancia > 1) this.boolean_distancia_alerta = true;
                            if(value.biometrica > 0.61) this.boolean_biometrico_alerta = true;

                          })     
                          this.ultimosIngresos={
                            info: data
                          } 
        } );

       console.log("Fin de on init")

   }

  ngOnDestroy() {
    //clearInterval(this.intervalo)
    console.log("***** SALIENDO DEL COMPONENTE ************ -> -> -> -> ")
  }


  SucursalSelected(evento){
    this.boleanoLoader = true;
    this.sucursal = evento;
    this.cantidad_trabajadores = false;
    this.CrudService_.get({'nombre_empresa': this.nombre_empresa, 'sucursal': this.sucursal}, 'get_horario_por_sucursal')
                .subscribe((data:any[]) => {
                    let f = new Date();
                    let cuantia_actual = f.getHours() + (f.getMinutes()  / 60 );

                    data.map(value => {
                      if(value.caso_especial === 'Si'){
                         // alert(f.getFullYear()) // Normal, el año.
                         // alert(f.getMonth())  //debo sumarle uno
                         // alert(f.getDate()) // el día, esta bien.
                         //    alert(value.fecha_caso_especial.split('-')[0]) // año
                         //    alert(value.fecha_caso_especial.split('-')[1] *1) // mes
                         //    alert(value.fecha_caso_especial.split('-')[2]) // dia

                             if(f.getFullYear() === (value.fecha_caso_especial.split('-')[0]*1) &&  1*(f.getMonth()+1) === ( value.fecha_caso_especial.split('-')[1]*1) &&  f.getDate() === (1*value.fecha_caso_especial.split('-')[2]) ){
                                  this.cantidad_trabajadores = value.cantidad_trabajadores;
                                  
                              }
                      }else{
                           if(this.cantidad_trabajadores === false && value.cuantia_inferior < cuantia_actual && value.cuantia_superior > cuantia_actual && this.array_dias[f.getDay()] === value.dia && value.caso_especial === 'No'){
                              this.cantidad_trabajadores = value.cantidad_trabajadores;     
                           }
                      }

                    })
    })
    this.GetActualmenteTrabajando();
  }

  GetActualmenteTrabajando(){
       this.LibroremuneracionesService_.actualmenteTrabajandoPorSucursal({'id': this.nombre_empresa, 'ultimosN':5, 'sucursal':this.sucursal  })
       .subscribe((data:any[]) => {

               
                if(JSON.stringify(data) !== JSON.stringify(this.actualmenteTrabajando.info)){



                    this.actualmenteTrabajando =  {
                      info: data
                    }     

                  console.log("data.length", data.length)
                  console.log("this.actualmenteTrabajando.info.length", this.actualmenteTrabajando.info.length)
                }else{
                  console.log("****** ES LA MISMA INFO ************")
                }
 
        }, (error) => {}, ()=>this.boleanoLoader = false)
      } // Fin función GetActualmenteTrabajando

} // Fin CLASE *******


interface ultimosIngresos{
  info: any;
}

interface actualmenteTrabajando{
  info:any;
}
