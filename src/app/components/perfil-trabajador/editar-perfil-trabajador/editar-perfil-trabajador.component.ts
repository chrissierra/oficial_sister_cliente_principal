import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarcajeServiceService } from '../../../services/marcaje-service.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PerfilTrabajadorServiceService } from '../../../services/perfil-trabajador-service.service';
import { EmpleadoService} from '../../ingresa/interfaces/empleado.service';
import { Observable } from 'rxjs';
import { IngresoUsuarioServidorService } from '../../../services/ingreso-usuario-servidor.service';
import swal from 'sweetalert2'


@Component({
  selector: 'app-editar-perfil-trabajador',
  templateUrl: './editar-perfil-trabajador.component.html',
  styleUrls: ['./editar-perfil-trabajador.component.css']
})
export class EditarPerfilTrabajadorComponent   {

  public id:any;
  public urlImagenTrabajador:any;	
  public Empleado:any;
  sucursales:any;
  constructor(	public servicio_empleado: IngresoUsuarioServidorService, 
      				  private perfilServicio_ : PerfilTrabajadorServiceService,
      				  private snackBar: MatSnackBar,
	              private MarcajeServiceService: MarcajeServiceService,
	              private param: ActivatedRoute,
	              private router: Router,
	              private empleadoService_ :EmpleadoService) {

	  this.id =  this.param.parent.snapshot.paramMap.get('id');    

  	this.perfilServicio_.getPerfil(this.param.parent.snapshot.paramMap.get('id')).subscribe( data => {

          this.urlImagenTrabajador =  'https://sister.cl/trabajadores/'+ data[0].rut +'/registro/'+ data[0].rut +'.jpg' ;
         	
         	this.Empleado = this.empleadoService_.editarEmpleado(data[0]);

          console.log(this.Empleado[0].name);
          
          this.sucursales = this.empleadoService_.sucursalesId;

         	console.log(data[0])

  	})
			
  }


 	   guardar(forma) {
			     console.log(forma)
			     console.log(forma.value)
			 //if(!forma.valid)  {
			         //  this.mensajeError();

			  //} else{


			        
			        this.servicio_empleado.actualizar_usuario_datos_generales(forma.value )
			           .subscribe( data => {
			             console.log(data)
			           
			           },
			           error =>{
			             console.log("Errorcito...", error)
			           }, () => this.mensajeExito())
			           console.log(forma.value)
			           if(this.param.snapshot.paramMap.get('formato')){
			                 // this.router.navigate(['./Ingresa/paso3/']);
			           } // *** Agregar si es manual, donde va, un toast que diga que está ok.  ***
			  //}        
           
   } // Fin función onSubmit


   public mensajeError(){
       swal({
          title: 'Error',
          text: 'Todos los campos son obligatorios',
          type: 'error',
          confirmButtonText: 'Ok'
        })
   }

      public mensajeExito(){
       swal({
          title: 'Proceso realizado',
          text: 'Se actualizó correctamente',
          type: 'success',
          confirmButtonText: 'Ok'
        });
       this.router.navigate(['./PerfilTrabajador/'+this.id+'/Perfil']);
   }




  /*
  @Obtener id de la url
  */
 	private getID(){
 					this.id = {
						'id':	this.param.parent.snapshot.paramMap.get('id')
					  };
 	} // ** Fin función getId


}
