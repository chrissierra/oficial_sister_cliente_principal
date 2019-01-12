import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MensajesSwalService } from './mensajes-swal.service';
@Injectable()
export class AuthGuard implements CanActivate {
	public deviceInfo:any;
	constructor( public MensajesSwalService_: MensajesSwalService,
				 public Route_: Router,
				 ){
	}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  		
  		if(localStorage.getItem('nombre_empresa') !== null && localStorage.getItem('nombre_empresa').length > 2){
				return true;
  		}else{
  			this.returnFalso('Debes ingresar tus credenciales')
  		}
  		console.log(next.url[0].path)

  		
		  	
  }// Fin función act.



  private returnFalso(texto){
  		this.Route_.navigate(['./Login']);
  		
  		this.MensajesSwalService_.mensajeStandar({
  			titulo:'Error',
  			texto: texto,
  			boton: 'Ok',
  			tipo: 'error'
  		})
  		
  		return false;
  } // Fin función returnFalso




}
