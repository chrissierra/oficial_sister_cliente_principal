import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Guard
import { AuthGuard } from './services/auth.guard';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { IngresaComponent } from './components/ingresa/ingresa.component';

import { PasounoComponent } from './components/ingresa/pasos/pasouno/pasouno.component';
import { PasodosComponent } from './components/ingresa/pasos/pasodos/pasodos.component';
import { PasotresComponent } from './components/ingresa/pasos/pasotres/pasotres.component';
import { PlanillaComponent } from './components/planilla/planilla.component';
import { PerfilTrabajadorComponent } from './components/perfil-trabajador/perfil-trabajador.component';

import { TurnosVariablesComponent } from './components/perfil-trabajador/turnos-variables/turnos-variables.component';
import { TurnosFijosComponent } from './components/perfil-trabajador/turnos-fijos/turnos-fijos.component';
import { PerfilComponent } from './components/perfil-trabajador/perfil/perfil.component';
import { HistorialTurnosComponent } from './components/perfil-trabajador/historial-turnos/historial-turnos.component';
import { LiberarTurnosComponent } from './components/perfil-trabajador/liberar-turnos/liberar-turnos.component';
import { EditarPerfilTrabajadorComponent } from './components/perfil-trabajador/editar-perfil-trabajador/editar-perfil-trabajador.component';



import { DashBoardComponent } from './components/dashboard/dash-board/dash-board.component';
import { PerfilEmpleadorComponent } from './components/dashboard/perfil-empleador/perfil-empleador.component';
import { IngresoSucursalComponent } from './components/dashboard/ingreso-sucursal/ingreso-sucursal.component';
import { ReportesComponent } from './components/dashboard/reportes/reportes.component';
import { MarcajeComponent } from './components/perfil-trabajador/marcaje/marcaje.component';
import { SueldosComponent } from './components/dashboard/sueldos/sueldos.component';
import { LiberarSueldosComponent } from './components/perfil-trabajador/liberar-sueldos/liberar-sueldos.component';

import { HaberNoImponibleComponent } from './components/perfil-trabajador/haber-no-imponible/haber-no-imponible.component';
import { SueldosLiberadosComponent } from './components/perfil-trabajador/SueldosLiberados/SueldosLiberadosComponent.component';
import { ResumenComponent } from './components/perfil-trabajador/resumen/resumen.component';
import { ActualizarTurnosFijosComponent } from './components/perfil-trabajador/actualizar-turnos-fijos/actualizar-turnos-fijos.component';

import { RepasistenciadiarioComponent } from './components/dashboard/reportes/repasistenciadiario/repasistenciadiario.component';
import { RepasistenciamensualComponent } from './components/dashboard/reportes/repasistenciamensual/repasistenciamensual.component';
import { EditarFotoComponent } from './components/perfil-trabajador/editar-foto/editar-foto.component';
import { ConfiguracionComponent } from './components/dashboard/configuracion/configuracion.component';
import { ActualizarFotoComponent } from './components/dashboard/actualizar-foto/actualizar-foto.component';
import { CargosComponent } from './components/dashboard/cargos/cargos.component';

import { ClientesComponent } from './components/dashboard/clientes/clientes.component';
import { RepasistenciareprobadoComponent } from './components/dashboard/reportes/repasistenciareprobado/repasistenciareprobado.component';
import { RepasistenciaxtrabajadorComponent } from './components/dashboard/reportes/repasistenciaxtrabajador/repasistenciaxtrabajador.component';
import { DesvinculacionBasicaComponent } from './components/perfil-trabajador/desvinculacion-basica/desvinculacion-basica.component'
import { TurnosNocheComponent } from './components/perfil-trabajador/turnos-noche/turnos-noche.component'
import { RepviaticosComponent } from './components/dashboard/reportes/repviaticos/repviaticos.component'


import { RepunitarioComponent } from './components/dashboard/reportes/repunitario/repunitario.component';
import { RepactualmentetrabajandoComponent } from './components/dashboard/reportes/repactualmentetrabajando/repactualmentetrabajando.component';
import { EditarSucursalComponent } from './components/dashboard/editar-sucursal/editar-sucursal.component';
import { RepresumenmensualComponent } from './components/dashboard/reportes/represumenmensual/represumenmensual.component';
import { RepofflinemensualComponent } from './components/dashboard/reportes/repofflinemensual/repofflinemensual.component';
import { RepturnosincompletosComponent } from './components/dashboard/reportes/repturnosincompletos/repturnosincompletos.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  
  { path: 'DashBoard', component: DashBoardComponent,canActivate:[AuthGuard], children: [
   
    { path: 'PerfilEmpleador' , component: PerfilEmpleadorComponent},
    { path: 'IngresoSucursal' , component: IngresoSucursalComponent},
    { path: 'EditarSucursal' , component: EditarSucursalComponent},
    { path: 'ConfiguracionComponent' , component: ConfiguracionComponent},
    { path: 'Clientes' , component: ClientesComponent},
    { path: 'SueldosComponent' , component: SueldosComponent},
    { path: 'Cargos' , component: CargosComponent},
    { path: 'ActualizarFoto/:rut' , component: ActualizarFotoComponent},
    { path: 'Reportes' , component: ReportesComponent, children:[
      
        { path: 'ReporteDiarioAsistencia' , component: RepasistenciadiarioComponent},      
        { path: 'ReporteMensualAsistencia' , component: RepasistenciamensualComponent},
        { path: 'Repasistenciareprobado' , component: RepasistenciareprobadoComponent},
        { path: 'Repasistenciaxtrabajador' , component: RepasistenciaxtrabajadorComponent},
        { path: 'Repviaticos' , component: RepviaticosComponent},
        { path: 'Represumenmensual' , component: RepresumenmensualComponent},        
        { path: 'Repunitario/:id' , component: RepunitarioComponent},
        { path: 'Repactualmentetrabajando' , component: RepactualmentetrabajandoComponent},
        { path: 'Repofflinemensual' , component: RepofflinemensualComponent},
        { path: 'Repturnosincompletos' , component: RepturnosincompletosComponent},



        ]},
    { path: '**',canActivate:[AuthGuard], component: PerfilEmpleadorComponent }

  ] },
  { path: 'Planilla',canActivate:[AuthGuard], component: PlanillaComponent },
  { path: 'PerfilTrabajador/:id',canActivate:[AuthGuard], component: PerfilTrabajadorComponent, children:[
  		{ path: 'Perfil' , component: PerfilComponent},
		  { path: 'TurnosVariables' , component: TurnosVariablesComponent},
		  { path: 'TurnosFijos' , component: TurnosFijosComponent},
      { path: 'TurnosNoche' , component: TurnosNocheComponent},
      { path: 'Marcaje' , component: MarcajeComponent},
      { path: 'ActualizarTurnosFijos', component: ActualizarTurnosFijosComponent },
      { path: 'HaberNoImponible' , component: HaberNoImponibleComponent},
		  { path: 'SueldosLiberados' , component: SueldosLiberadosComponent},
      { path: 'Resumen' , component: ResumenComponent},
      { path: 'EditarPerfilTrabajador' , component: EditarPerfilTrabajadorComponent},      
      { path: 'DesvinculacionBasica' , component: DesvinculacionBasicaComponent},      
      { path: 'LiberarSueldos' , component: LiberarSueldosComponent},
      { path: 'HistorialTurnos' , component: HistorialTurnosComponent},
      { path: 'LiberarTurnos/:mes/:anio' , component: LiberarTurnosComponent},
      { path: 'EditarFoto/:rut' , component: EditarFotoComponent},

  ] },
  { path: 'Ingresa', canActivate:[AuthGuard],component: IngresaComponent, children: [

{ path: 'paso1' , component: PasounoComponent},
{ path: 'paso2/:formato' , component: PasodosComponent},
{ path: 'paso3/:rut' , component: PasotresComponent},
  ]
   },
 { path: 'Home',canActivate:[AuthGuard], component: HomeComponent },
 { path: '**', component: LoginComponent }
];

export const peo =  RouterModule.forRoot(routes);


