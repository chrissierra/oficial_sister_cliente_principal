import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilTrabajadorServiceService } from '../../../services/perfil-trabajador-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MarcajeServiceService } from '../../../services/marcaje-service.service';
import swal from 'sweetalert2'
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent {
    someHtml:any = 'Escribe acá';
    logoHtml:any ='<div><img class="img-thumbnail" title="profile image" width="100px" src="https://sister.cl/clientes_rrhh/12341234/registro/12341234.jpg"></div>'
    empleado_:any;
  	datos_perfil_empleado: any;
  	id_parent: string;
    boleano_boton: any;
    turnos_sin_liberar: any;
    trabaja_dia_en_curso: any;
    entrada: any;
    salida: any;
    id: any;
    statusEntrada: any;
    statusSalida: any;
    turnoFijoSinTurno:boolean = true;
    urlImagenTrabajador:any;
    TrabajadorSinTurno:any;
    tipoTurno:any;
    EstadoFotografiaTrabajador: boolean;
constructor(private snackBar: MatSnackBar, 
            private perfilServicio_ : PerfilTrabajadorServiceService, 
            private MarcajeServiceService: MarcajeServiceService,
            private param: ActivatedRoute, 
            private router : Router) { 

              this.id = {
                'id':	this.param.parent.snapshot.paramMap.get('id')
                };

                this.MarcajeServiceService.situacion_marcaje( JSON.stringify(this.id) ).subscribe( data => {
                  console.log("LOs datos del marcaje ", data); // => Hora de la entrada, hora de la salida. 
                  console.log("tipo turno", data['TipoTurno']) // => Con esto empiezo . ***   1
                  this.tipoTurno = data['TipoTurno'];
                  this.turnoFijoSinTurno = (data['trabajaDiaEnCurso'] === 0) ? true : false;
                  this.TrabajadorSinTurno = (data['TurnoYaRealizado'] ===  "No tiene horario") ? this.funcionNoTieneTurnos() : false;
                  this.trabaja_dia_en_curso = data['trabajaDiaEnCurso'];
                  this.entrada = data['Entrada'];
                  this.salida = data['Salida'];
                  this.statusEntrada = data['EstatusEntrada'];
                  this.statusSalida = data['EstatusSalida'];
                });
    
    this.id_parent = this.param.parent.snapshot.paramMap.get('id');

    this.perfilServicio_.getTurnosSinLiberacion(this.id_parent).then(data=>{
      this.turnos_sin_liberar = data;
      console.log("turnos_sin_liberar",data);

    });
    
    this.perfilServicio_.getPerfil(this.param.parent.snapshot.paramMap.get('id')).subscribe( data => {
      
    this.urlImagenTrabajador =  'https://sister.cl/trabajadores/'+ data[0].rut +'/registro/'+ data[0].rut +'.jpg?id='+ new Date().getTime() ;
   	
   	this.datos_perfil_empleado = data;

   	this.boleano_boton = this.datos_perfil_empleado[0].horario_con_o_sin_turnos;

   	this.empleado_ = data[0];

    this.perfilServicio_.GetEstatusFotografia({'trabajador_id': this.param.parent.snapshot.paramMap.get('id')})
    .subscribe( data => {
          console.log("GetEstatusFotografia", data[0].validado);
          if(data[0].validado === 'false'){
            this.EstadoFotografiaTrabajador = false;
          }else{
            this.EstadoFotografiaTrabajador = true;
          }
    } )

   })
  
  } // FIn constructor


  changed(){
    //alert("Asdfasfdadsf")
    //alert(this.EstadoFotografiaTrabajador)
    this.perfilServicio_.InsertContrasteFotograficoValidacion({
      'nombre_empresa_usuario_plataforma': localStorage.getItem('nombre_empresa'),
      'trabajador_id': this.param.parent.snapshot.paramMap.get('id'),
      'empresa_id':localStorage.getItem('id'),
      'validado': this.EstadoFotografiaTrabajador
    }).subscribe( data => {
      console.log(data)
    } )
  }


  funcionNoTieneTurnos(){
    this.mensajeError('Error', 'Trabajador no tiene los turnos realizados. Debes generarlos.', 'error', 'Ok' );
    return true;
  } // Fin función funcionNoTieneTurnos



  public editarImagen(){
    alert(this.datos_perfil_empleado[0].rut)
      this.router.navigate(['./PerfilTrabajador/1/EditarFoto/'+this.datos_perfil_empleado[0].rut]);

  }

  public verHTML(e){

     this.someHtml = this.logoHtml + e;
     console.log(this.someHtml)
     setTimeout(()=> {
           var data = document.getElementById('parentdiv');  //Id of the table
          html2canvas(data).then(canvas => {  
            // Few necessary setting options  
            let imgWidth = 208;   
            let pageHeight = 295;    
            let imgHeight = canvas.height * imgWidth / canvas.width;  
            let heightLeft = imgHeight;  

            const contentDataURL = canvas.toDataURL('image/png')  
            let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
            let position = 0;  
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
            pdf.save('MYPdf.pdf'); // Generated PDF   
          }); 
     }, 20000)
 
  }

  //<img class="img-thumbnail" title="profile image" width="100px" src="https://sister.cl/clientes_rrhh/12341234/registro/12341234.jpg">


 
   public mensajeError(titulo, texto, tipo, boton){
       swal({
          title: titulo,
          text: texto,
          type: tipo,
          confirmButtonText: boton
        })
   } // Fin funcion mensajeError

   RotarImagen(){
     //alert(this.datos_perfil_empleado[0].rut)
     this.perfilServicio_.rotarImagen(this.datos_perfil_empleado[0].rut)
     .subscribe( data => {
       console.log(data)
     })
     window.location.reload();
   }



} // Fin clase.
