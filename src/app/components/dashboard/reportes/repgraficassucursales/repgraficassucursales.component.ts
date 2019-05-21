import { LibroremuneracionesService } from '../../../../services/libroremuneraciones.service';
import {MatDatepicker} from '@angular/material/datepicker';
import { Moment} from 'moment';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import * as XLSX from 'xlsx';
import { Store } from '@ngrx/store';
import * as fromMarcaje from '../../../marcaje.actions';
import { AppState } from '../../../../app.reducers';
import { Observable, of, forkJoin } from 'rxjs'; 

@Component({
  selector: 'app-repgraficassucursales',
  templateUrl: './repgraficassucursales.component.html',
  styleUrls: ['./repgraficassucursales.component.css']
})
export class RepgraficassucursalesComponent implements OnInit {
	public nombreEmpresa:any;	
	public calendario:any;
	public movimiento:any;
	public mes:any = 'mes';
	public anio:any;
	public date = new FormControl();
  public sucursal:any;
	public movimientos: any[] = [];
  public anual:boolean=false;
  public begin:boolean= false;
      public arrayResultado: any[]= []
      public arrayResultado1: any[]= []
      public arrayMeses:any[]= []

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:any[] = ['Horas Pactadas', 'Horas Extras'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartLabelsM = ['Ene', 'Feb', 'Mar', 'Abr', 'Mar', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  public barChartData:any[] = [
    {data: [65], label: 'Series A'},
    {data: [28], label: 'Series B'}
  ];
  constructor(private store: Store<AppState>,
              public servicioLibroDiario:LibroremuneracionesService) { 
  	this.nombreEmpresa = localStorage.getItem("nombre_empresa");
    console.log(this.barChartLabels)
    //this.getResumen()
  }

  ngOnInit() {
  }


chartClicked(e){
  //alert("hola")
  console.log(e)
}

  	getFromState(){
            this.store.select('marcaje')
          .subscribe( marcaje  => {       
               this.sucursal = marcaje.Sucursal;
          });

          console.log("this.sucursal", this.sucursal);
    } // Fin getFromState



    private getResumen(){
      this.servicioLibroDiario.HorasPorSucursalMes(this.nombreEmpresa, this.mes, this.anio, this.sucursal)
      .subscribe(data => {
        console.log(data)
        this.barChartData = [
         { data: [data['horasExactas'], 0],  label: 'Horas Normales' },
         { data: [0, data['horasExtras']],  label: 'Turnos' }
        ]
      })
    }
  

    Anual(){
      this.begin= true;
      this.anual = true;
      this.getFromState();
      var observables: Observable<any>[] = [];
      this.arrayResultado = [];
      this.arrayResultado1 = [];
      
      for (var i = 1; i < 13; ++i) {
        // code...
        this.arrayMeses.push(i.toString())
        console.log(i)
        observables.push(this.servicioLibroDiario.HorasPorSucursalMes(this.nombreEmpresa, i, this.anio, this.sucursal));

      }

      forkJoin(observables)
      .subscribe(dataArray => {

        dataArray.map(value => {
              console.log(value['horasExactas'])
              this.arrayResultado.push(value['horasExactas']);
              this.arrayResultado1.push(value['horasExtras']);
              console.log("En forkjoin", value)
        })
       
      }, (error)=> {

      }, ()=> {

            this.barChartData = [
               { data: this.arrayResultado,  label: 'Horas Normales' },
               { data: this.arrayResultado1,  label: 'Turnos' }
              ]
      });


     

    }


    ActualizarPorSucursal(){
      this.anual = false;
      this.begin= true;
      this.getFromState();

      this.getResumen()

    }
}