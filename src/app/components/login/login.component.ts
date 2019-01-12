import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { LoginservicesService } from '../../services/loginservices.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent  {
  forma: FormGroup;
  respuesta_servidor_login :any;
  constructor(private router: Router, private login_: LoginservicesService) {


            this.forma = new FormGroup({

              'rut_empresa': new FormControl('', [Validators.required]),
              'clave': new FormControl('', [Validators.required]),
        });

   }

   onSubmit(forma) {
   
   this.respuesta_servidor_login = this.login_.login(forma.value).subscribe(a => {
      console.log(a)
      if(a['error'] === 'Contraseña Errónea'){
        this.mensajeError('Contraseña no corresponde');
      }else{
         // nada que ver -> localStorage.setItem('horario_con_o_sin_turnos', a['horario_con_o_sin_turnos'].toString());

      console.log("Respuesta del login...", a)
      localStorage.setItem('rut_empresa', a["rut_empresa"].toString());
      localStorage.setItem('nombre_empresa', a["nombre_empresa"].toString());
      localStorage.setItem('nombre_rep', a["nombre_rep"].toString());
      localStorage.setItem('id', a["id"].toString());
      this.router.navigate(['./Home']);

      }
     
    }, (error)=>{
      this.mensajeError('Rut de cliente no existe');
    });
  
    

   }


   mensajeError(texto){
     return swal({
          title: 'Error',
          text: texto,
          type: 'error',
          confirmButtonText: 'Ok'
        })
  }



}
