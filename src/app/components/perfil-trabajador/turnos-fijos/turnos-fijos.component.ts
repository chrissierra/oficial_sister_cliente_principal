import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilTrabajadorServiceService } from '../../../services/perfil-trabajador-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MarcajeServiceService } from '../../../services/marcaje-service.service';
import { NgForm } from '@angular/forms';
import { IngresoUsuarioServidorService } from '../../../services/ingreso-usuario-servidor.service';
import { MensajesSwalService, TipoMensaje } from '../../../services/mensajes-swal.service';

@Component({
  selector: 'app-turnos-fijos',
  templateUrl: './turnos-fijos.component.html'
})
export class TurnosFijosComponent implements OnInit {

	public dias: any;
	public trabajador_id:any;
  constructor(private IngresoUsuarioServidorService_:IngresoUsuarioServidorService,
  			  private snackBar: MatSnackBar, 
              private perfilServicio_ : PerfilTrabajadorServiceService, 
              private MarcajeServiceService: MarcajeServiceService,
              private param: ActivatedRoute, 
              private router : Router,
              private mensajesSwal:MensajesSwalService) { 

  	this.dias = this.perfilServicio_.array_dias;
    this.trabajador_id = this.param.parent.snapshot.paramMap.get('id');

  }

  ngOnInit() {
  }


	guardar(forma: NgForm){
		console.log(forma.value)
		this.IngresoUsuarioServidorService_.insertar_turno_fijo(forma.value)
		.subscribe( data => {
			console.log(data)
       this.mensajesSwal.mensajeStandar({
        titulo: 'Turno Actualizado',
        texto: 'Turno generado exitosamente',
        tipo: 'success',
        boton: 'ok',
      });

      this.router.navigate(['../PerfilTrabajador/'+this.param.parent.snapshot.paramMap.get('id')+'/Perfil']);
		}, error => {
			console.error(error + "ERROR")
		} )
	}
}
