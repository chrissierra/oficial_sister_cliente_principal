import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilTrabajadorServiceService } from '../../../services/perfil-trabajador-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MarcajeServiceService } from '../../../services/marcaje-service.service';
import { NgForm } from '@angular/forms';
import { IngresoUsuarioServidorService } from '../../../services/ingreso-usuario-servidor.service';
import { MensajesSwalService, TipoMensaje } from '../../../services/mensajes-swal.service';
import { DesvinculacionService } from '../../../services/desvinculacion.service';

@Component({
  selector: 'app-desvinculacion-basica',
  templateUrl: './desvinculacion-basica.component.html',
  styleUrls: ['./desvinculacion-basica.component.css']
})
export class DesvinculacionBasicaComponent implements OnInit {
	public trabajador_id:any;
  constructor(private DesvinculacionService_: DesvinculacionService,
  			  private IngresoUsuarioServidorService_:IngresoUsuarioServidorService,
  			  private snackBar: MatSnackBar, 
              private perfilServicio_ : PerfilTrabajadorServiceService, 
              private MarcajeServiceService: MarcajeServiceService,
              private param: ActivatedRoute, 
              private router : Router,
              private mensajesSwal:MensajesSwalService) { 



    this.mensajesSwal.mensajePromesa('IMPORTANTE', '¿ Estás seguro que deseas desvincular a tu trabajador ?', 'warning', 'Si. Lo desvincularé.')
    .then( data => {
      if(data.value){
          this.trabajador_id = this.param.parent.snapshot.paramMap.get('id');
                                this.DesvinculacionService_.desvincular({id: this.trabajador_id})
                                .subscribe( data => {
                                   console.log(data)
                                }, error =>  {
                                  console.log("Error", error)
                                }, () => {
                                      this.mensajesSwal.mensajeStandar({
                                        titulo: 'Desvinculación Lista',
                                        texto: 'El proceso se realizó existosamente',
                                        tipo: 'success',
                                        boton: 'Ok'
                                      });
        this.router.navigate(['../Planilla'])
                                      
                                } )
      }else{
        this.router.navigate(['../Planilla'])
      }
    } )
    
  }

  ngOnInit() {
  }

}
