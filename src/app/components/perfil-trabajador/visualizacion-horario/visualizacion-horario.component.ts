import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfilTrabajadorServiceService } from '../../../services/perfil-trabajador-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IngresoUsuarioServidorService } from './../../../services/ingreso-usuario-servidor.service';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import esLocale from '@fullcalendar/core/locales/es';
import * as moment from 'moment';

@Component({
  selector: 'app-visualizacion-horario',
  templateUrl: './visualizacion-horario.component.html',
  styleUrls: ['./visualizacion-horario.component.css']
})
export class VisualizacionHorarioComponent implements OnInit {
  public id:any;
  public anio:any;
  public mes:any;
  public anioIntermedio:any;
  public mesIntermedio:any;
  public dias:any;
  public Turno:TurnoNoche;
  public hora_a:any[];
  public hora_b:any[];
  public tipo_a:any[];
  public tipo_b:any[];
  public booleanoBotonActualizar: boolean = false;
  public booleanoDatosServidor: boolean = false;
  public calendarVisible = true;
  public calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  public calendarWeekends = true;
  public calendarEvents: EventInput[] = [

    { title: 'Event Now', start: new Date() }
  ];
  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  constructor(	private perfilServicio_: PerfilTrabajadorServiceService,
	        	private param: ActivatedRoute,
	        	private router: Router,
	        	public servicio_empleado: IngresoUsuarioServidorService) { }

  ngOnInit() {
  	 this.id = this.param.parent.snapshot.paramMap.get('id');
  	 this.anio = new Date().getFullYear();
  	 this.mes = new Date().getMonth() + 1;
  	 this.procesado()
  	 this.perfilServicio_.getTurnoNocheService({id: this.id, mes: this.mes, anio: this.anio})
  	 .subscribe(data => {
       console.log(data)
  	 	console.log(data[0].turno)
  	 })



  }



  private procesado(){
  	let fecha = "2019-08";

  	console.log(  moment(fecha, "YYYY-MM").daysInMonth()  ) // 29)
  }


handleDateClick(e){
	console.log(e)
  let calendarApi = this.calendarComponent.getApi();
  console.log(calendarApi.getDate())
  //console.log(calendarApi.getEventById())
}

peo(e){
  console.log(e.view.currentEnd)
  console.log(new Date(e.view.currentStart).getMonth() + 1)
  let mes = new Date(e.view.currentStart).getMonth() + 1;
  let mes_para_fecha;
  let dia;
  if(mes <10){
  mes_para_fecha = '0'+mes;
  }else{
mes_para_fecha = mes;
  }
  let anio = new Date(e.view.currentStart).getFullYear();
  let arraycito = [];
   this.perfilServicio_.getTurnoNocheService({id: this.id, mes: mes, anio: this.anio})
     .subscribe(data => {
       console.log(data)
       console.log(JSON.parse(data[0].turno).tipo_b_31)
       console.log(data[0].turno)
       for (var i = 1; i < 32; ++i) {
         // code...
         console.log(JSON.parse(data[0].turno)['tipo_a_'+i])

         dia = i < 10 ? '0'+i : i;
         if(JSON.parse(data[0].turno)['tipo_a_'+i] !== undefined && JSON.parse(data[0].turno)['tipo_a_'+i].length > 0){
           console.log( anio+'-0'+mes+ '-'+i)
           arraycito.push({ title: JSON.parse(data[0].turno)['tipo_a_'+i]+": "+JSON.parse(data[0].turno)['hora_a_'+i], start: anio+'-'+mes_para_fecha+ '-'+dia })
         }
         if(JSON.parse(data[0].turno)['tipo_b_'+i] !== undefined && JSON.parse(data[0].turno)['tipo_b_'+i].length > 0){
           arraycito.push({ title: JSON.parse(data[0].turno)['tipo_b_'+i]+": "+JSON.parse(data[0].turno)['hora_b_'+i], start: anio+'-'+mes_para_fecha+ '-'+dia})
         }
         console.log(JSON.parse(data[0].turno)['tipo_b_'+i])

       }
        console.log(this.calendarEvents)
        this.calendarEvents = arraycito;
     })

  console.log(e.view)
  console.log(e.view.calendar)
}



} // Fin clase de Componente



interface TurnoNoche {
	mes: number;
	anio:number;
	id_trabajador:number;
	turno: any;
}
