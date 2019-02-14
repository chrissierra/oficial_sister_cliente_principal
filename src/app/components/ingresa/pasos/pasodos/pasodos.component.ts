import { Component, OnInit } from '@angular/core';
import { EmpleadoService} from '../../interfaces/empleado.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { IngresoUsuarioServidorService } from '../../../../services/ingreso-usuario-servidor.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2'
@Component({
  selector: 'app-pasodos',
  templateUrl: './pasodos.component.html'
})
export class PasodosComponent {

  forma: FormGroup;
  Empleado: any[];
  sucursales:any;
  constructor(public servicio_empleado: IngresoUsuarioServidorService, 
              public empleadoService_: EmpleadoService, 
              private router: Router, 
              private param: ActivatedRoute,) {
 
   
    this.Empleado = this.empleadoService_.array_empleado;
    console.log(this.Empleado[0].name);
   this.sucursales = this.empleadoService_.sucursalesId;


   }  // Fin Constructor

    funcion_paso3(rut){
    this.router.navigate(['../Ingresa/paso3/'+rut]);
  }

   guardar(forma) {
     console.log(forma)
   if(!forma.valid)  {
          this.mensajeError();
         
   } else{


        
        this.servicio_empleado.insertar_usuario_datos_generales(forma.value)
           .subscribe( data => {
             console.log(data)
             this.funcion_paso3(forma.value['rut'])
           },
           error =>{
             console.log("Errorcito...", error)
           })
           console.log(forma.value)
           if(this.param.snapshot.paramMap.get('formato')){
                 // this.router.navigate(['./Ingresa/paso3/']);
           } // *** Agregar si es manual, donde va, un toast que diga que está ok.  ***
    }        
           
   } // Fin función onSubmit


   public mensajeError(){
       swal({
          title: 'Error',
          text: 'Todos los campos son obligatorios',
          type: 'error',
          confirmButtonText: 'Ok'
        })
   }

}
