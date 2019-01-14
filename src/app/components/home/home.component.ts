import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibroremuneracionesService } from './../../services/libroremuneraciones.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnDestroy {

rut_empresa: string = localStorage.getItem('rut_empresa');
nombre_empresa: string = localStorage.getItem('nombre_empresa');
nombre_rep: string = localStorage.getItem('nombre_rep');
public ultimosIngresos:ultimosIngresos;
public url:any;
public intervalo:any;
public actualmenteTrabajando:any;

constructor(  public LibroremuneracionesService_: LibroremuneracionesService) {
            this.actualmenteTrabajando = {
          info:[]
        }
        let fecha = new Date();
      
        const hoy = (fecha.getMonth() + 1)  + '-' + fecha.getDate() + '-' + fecha.getFullYear();
        
        this.rut_empresa = localStorage.getItem('rut_empresa');
        
        this.LibroremuneracionesService_.GetdiarioUltimos({'id': this.nombre_empresa, 'dia': hoy, 'ultimosN':5 })
        .subscribe( (data) => {      
                          this.ultimosIngresos={
                            info: data
                          } 
        } );
            
        this.url = "https://sister.cl/clientes_rrhh/"+ this.rut_empresa + "/registro/" + this.rut_empresa + ".jpg"
        
        this.GetActualmenteTrabajando();
        
        this.intervalo= setInterval(()=>{
              this.GetActualmenteTrabajando();
        }, 3500)

   } // Fin constructor

  ngOnDestroy() {
    clearInterval(this.intervalo)
  }


  GetActualmenteTrabajando(){

       this.LibroremuneracionesService_.actualmenteTrabajando({'id': this.nombre_empresa, 'ultimosN':5  })
       .subscribe((data:any[]) => {
                console.log("resultados desde node para asistencia", data);

                console.log("data.length", data.length)
                  console.log("this.actualmenteTrabajando.info.length", this.actualmenteTrabajando.info.length)
                if(data.length !== this.actualmenteTrabajando.info.length){
                    this.actualmenteTrabajando =  {
                      info: data
                    }     

                  console.log("data.length", data.length)
                  console.log("this.actualmenteTrabajando.info.length", this.actualmenteTrabajando.info.length)
                }else{
                  console.log("****** ES LA MISMA INFO ************")
                }
 
        })
      } // Fin función GetActualmenteTrabajando

} // Fin CLASE *******


interface ultimosIngresos{
  info: any;
}

interface actualmenteTrabajando{
  info:any;
}
