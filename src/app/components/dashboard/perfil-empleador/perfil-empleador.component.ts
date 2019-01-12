import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlanillaservicesService } from '../../../services/planillaservices.service';
import { ClientesrrhhService } from '../../../services/clientesrrhh.service';
import { MensajesSwalService } from '../../../services/mensajes-swal.service';

@Component({
  selector: 'app-perfil-empleador',
  templateUrl: './perfil-empleador.component.html'
})
export class PerfilEmpleadorComponent  {


  nombre:string;
  apellido:string;
  nombreEmpresa:string;
  rut:any;
  url:any;
  Cliente:any;
  numeroEmpleados:any;
  Datos:any;

  constructor(private MensajesSwalService_: MensajesSwalService,  
              private ClientesrrhhService_ : ClientesrrhhService,
              private planillaServicio_: PlanillaservicesService,
              private router : Router) {
          this.ClientesrrhhService_.GetClientes({id: localStorage.getItem('id')})
          .subscribe( data => {
            this.Cliente = this.ClientesrrhhService_.setearArrayCliente(data);
            this.Datos = {
              info: data[0]
            }
              
            console.log(data)
            console.log(this.Datos)

          } )
          console.log("this.cliente", this.Datos)
          this.planillaServicio_.obtener_planilla(localStorage.getItem('nombre_empresa')).subscribe((data:any[]) => {
          
          console.log('data', data.length);
          
         this.numeroEmpleados = data.length

          });
      	
         this.nombre = localStorage.getItem('nombre_rep');
         this.nombreEmpresa = localStorage.getItem('nombre_empresa');
         this.rut = localStorage.getItem('rut_empresa');
         this.url = "https://sister.cl/clientes_rrhh/"+ this.rut + "/registro/" + this.rut + ".jpg"
   }

   FuncionActualizarFoto(){
        this.router.navigate(['./DashBoard/ActualizarFoto/'+this.rut ]);
   }


   guardar(forma){
     console.log(forma.value);

     this.MensajesSwalService_.mensajePromesa('Actualización de datos', '¿ Estás seguro de realizar la actualización ?', 'warning', 'Quiero actualizar')
     .then( result => {
           if(result.value){
                   this.ClientesrrhhService_.updateClientes(forma.value)
                   .subscribe( data => {
                     console.log(data)
                     this.router.navigate(['./DashBoard'])
                   } )
           }
     } )


   }

}
