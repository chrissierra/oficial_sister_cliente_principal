import { Component  } from '@angular/core';
import { contrasenias } from './Interfaces/claves.interface';
import { ClavesService } from "../../../services/claves.service";
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent  {
// Para asignar clave de nueva cuenta para instalaciones.
public claves:any[];  
public RespaldoServer:any;
constructor(public contrasenias_:contrasenias,
            public ClavesService_: ClavesService) {

      this.claves = this.contrasenias_.arrayContrasenias;
      console.log(this.claves);
      this.ClavesService_.getClaves({nombre_empresa: localStorage.getItem('nombre_empresa')})
      .subscribe( data => {
        console.log(data)
        this.RespaldoServer = data[0];
        if(data[0]){         
          this.claves[0].clave = data[0].clave;
          this.claves[1].clave = data[1].clave;
        }else{
          
        }
   
      } )
   }




  guardar(f){
   
    if(f.valid && !this.RespaldoServer ){
        this.ClavesService_.insertarClaves(this.contrasenias_.establecerArray(f.value))
        .subscribe( data => {
            console.log(data)

        }, (error) => {
          console.log(error)
        }, () => console.log("Completado") )
    }else if (f.valid && this.RespaldoServer ){
          this.ClavesService_.updateClaves(this.contrasenias_.establecerArray(f.value))
          .subscribe( data => {
              console.log(data)

          }, (error) => {
            console.log(error)
          }, () => console.log("Completado") )
    }else{
      console.log("formulario incompleto")
    }

    

  }
}
