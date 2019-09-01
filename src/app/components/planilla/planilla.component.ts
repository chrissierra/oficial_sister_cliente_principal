import { Component } from '@angular/core';
import { PlanillaservicesService } from '../../services/planillaservices.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromMarcaje from '../marcaje.actions';
import { AppState } from '../../app.reducers';
import { filter, map } from 'rxjs/operators';
import { from, pipe, of } from 'rxjs';

@Component({
  selector: 'app-planilla',
  templateUrl: './planilla.component.html'
})
export class PlanillaComponent {
  public empleados: any;
  public buscador: any;
  public name:any;
  public loading:boolean = true;
  public idSucursal:any;
  public empleados_todos:any;
  public PostulantesOactivos:any;
  constructor(	private store: Store<AppState>,
                private router: Router,
  				      private planillaServicio_: PlanillaservicesService) {


    this.getTodos();

   } // Fin constructor

   onChangePostulantesOactivos(e){
     console.log(e)
      this.planillaServicio_.obtener_postulantes({
        'nombre_empresa_usuario_plataforma':localStorage.getItem('nombre_empresa'),
        'estatus': e.srcElement.value
      }).subscribe(data => {
      
          console.log('data', data);
          
          this.empleados = data;
          //this.empleados_todos = data;

      }, (error)=> {

      }, ()=> {
          this.loading = false;
      });
   }


   getTodos(){
     this.planillaServicio_.obtener_planilla(localStorage.getItem('nombre_empresa')).subscribe(data => {
      
          console.log('data', data);
          
          this.empleados = data;
          this.empleados_todos = data;

      }, (error)=> {

      }, ()=> {
          this.loading = false;
      });
   }


  ir_perfil_empleado(){
			alert("asdf")
  }

  peo(e){
            console.log("EN PEOI:;;;:;;", e)
            setTimeout(()=> {
               this.getFromState("sucursal", e)
            }, 2000)
           
    
  }



  LimpiarFiltros(){
    this.empleados = this.empleados_todos
  }


    getFromState(sucursal, e){
        this.store.select('marcaje')
        .subscribe( result  => {       
          this.idSucursal = result.Sucursal;
          console.log("****Resultado *****", result)
          console.log("****Resultado *****", result.Sucursal)
          if(sucursal === 'sucursal'){

                       this.empleados = [];
                       this.empleados_todos.map((valor:any[]) => {
                       
                         //console.log(valor['sucursal_id'] + " " + this.idSucursal)
                         console.log("typeof valor['sucursal_id']" + valor['sucursal_id'], typeof valor['sucursal_id'])
                         console.log("e "+e, typeof e)
                         if(valor['sucursal_id'] === e){
                           
                             //console.log(valor)

                             //this.PerfilTrabajadorServiceService_.getContrasteFotograficoValidacion(valor['id'])
                             //.subscribe( data => console.log(data) )
                           
                             this.empleados.push(valor)
                         }
                       })

          }
        },(err)=> {
          console.log("ERROE?", err)
        }, ()=>{

        });
  }


  ir(empleado){
  	console.log(empleado)
  	localStorage.setItem('TrabajadorSeleccionadoPerfil', JSON.stringify(empleado))
  	this.router.navigate(['/PerfilTrabajador', empleado.id]);

  }

}
