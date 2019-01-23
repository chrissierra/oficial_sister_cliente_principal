import { Injectable } from '@angular/core';

@Injectable()
export class RutasservidorService {
  public urlServer:any = 'https://sister.cl/';
  public urlBase:any = 'https://sister.cl/laravel/index.php/';
  public urlBaseNode:any = 'https://sister.cl/SocketsSister/'
//  public urlBase:any = 'http://127.0.0.1:80/';

  constructor() { }

  rutas: Object = {
    // API: 
    'ingreso_empleados_datos_basicos': this.urlBase + 'api/Enrolamiento',
    'login': this.urlBase + 'api/login',
    'planilla': this.urlBase + 'api/planilla/',
    'perfil_trabajador': this.urlBase + 'perfil_trabajador/',
    'estatusTurnos': this.urlBase + 'estatusturnos/',
    'InsertTurnoVariable': this.urlBase + 'api/TurnosVariables/',
    'InsertTurnoFijo': this.urlBase + 'api/InsertTurnoFijo/',
    'updateTurnoFijo':this.urlBase + 'api/updateTurnoFijo/',
    'getTurnos':this.urlBase + 'api/getTurnos/',
    'TurnosSinLiberar': this.urlBase + 'TurnosSinLiberar/',
    'LiberarTurnos': this.urlBase + 'LiberarTurnos/',
    'ActualizarTurnos': this.urlBase + 'api/ActualizarTurnosVariables/',
    'LiberarDefinitivoTurnos': this.urlBase + 'api/LiberarDefinitivoTurnos/',
    'GuardarSucursal': this.urlBase + 'api/GuardarSucursal/',
    'SituacionMarcaje': this.urlBase + 'api/SituacionMarcaje/',
    'MarcarMovimiento': this.urlBase + 'api/MarcarMovimiento/',
    'ComisionAfp': this.urlBase + 'ComisionAfp/',
    'DiasLaboralesRealizados': this.urlBase + 'DiasLaboralesRealizados/',
    'DiasLaboralesCalendarizados': this.urlBase + 'DiasLaboralesCalendarizados/',
    'DiasLaboralesRealizadosNoche': this.urlBase + 'DiasLaboralesRealizadosNoche/',
    'LiberarSueldo': this.urlBase + 'api/LiberarSueldo/',
    'ConfirmarEstadoSueldo': this.urlBase + 'api/ConfirmarEstadoSueldo/',
    'SueldosLiberados': this.urlBase + 'api/SueldosLiberados/',
    'SueldosLiberadosPorFecha': this.urlBase + 'api/SueldosLiberadosPorFecha/',
    'UpdateTurnoFijo': this.urlBase + 'api/UpdateTurnoFijo/',
    'GetAsistenciaMesAnterior': this.urlBase + 'api/GetAsistenciaMesAnterior/',
    'libroremuneraciondiario': this.urlBase + 'api/libroremuneraciondiario/',
    'libroremuneracionmensual': this.urlBase + 'api/libroremuneracionmensual/',
    'Actualizacion_registro_Trabajadores': this.urlBase + 'api/Actualizacion_registro_Trabajadores/',
    'VerificarUltimoMovimiento': this.urlBase + 'api/VerificarUltimoMovimiento/',
    'ingresarClaves': this.urlBase + 'api/ingresarClaves/',
    'updateClaves': this.urlBase + 'api/updateClaves/',
    'getClaves': this.urlBase + 'api/getClaves/',
    'ingresarMandante': this.urlBase + 'api/ingresarMandante/',
    'actualizarMandante': this.urlBase + 'api/actualizarMandante/',
    'getMandante': this.urlBase + 'api/getMandante/',
    'deleteMandante': this.urlBase + 'api/deleteMandante/',
    'ingresarCargo': this.urlBase + 'api/ingresarCargo/',
    'actualizarCargo': this.urlBase + 'api/actualizarCargo/',
    'getCargos': this.urlBase + 'api/getCargos/',
    'deleteCargos': this.urlBase + 'api/deleteCargos/',
    'diarioPorTrabajador': this.urlBase + 'api/diarioPorTrabajador/',
    'mensualPorTrabajador': this.urlBase + 'api/mensualPorTrabajador/',
    'mensualPorSucursal': this.urlBase + 'api/mensualPorSucursal/',
    'diarioPorSucursal': this.urlBase + 'api/diarioPorSucursal/',
    'diarioUltimos': this.urlBase + 'api/diarioUltimos/',
    'get_sucursales': this.urlBase + 'api/get_sucursales/',
    'actualizarDatosClientes': this.urlBase + 'api/actualizarDatosClientes/',
    'GetDatosClientes': this.urlBase + 'api/GetDatosClientes/',
    'desvincular': this.urlBase + 'api/desvincular/',
    'GuardarTurnoNoche': this.urlBase + 'api/GuardarTurnoNoche/',
    'GetTurnoNoche': this.urlBase + 'api/GetTurnoNoche/',
    'UpdateTurnoNoche': this.urlBase + 'api/UpdateTurnoNoche/',
    'InsertViaticos': this.urlBase + 'api/InsertViaticos',
    'GetViaticosPorTrabajador': this.urlBase + 'api/GetViaticosPorTrabajador/',
    'GetViaticosPorEmpleador': this.urlBase + 'api/GetViaticosPorEmpleador',
    'actualmenteTrabajando': this.urlBase + 'api/actualmenteTrabajando',
    'actualmenteTrabajandoPorSucursal': this.urlBase + 'api/actualmenteTrabajandoPorSucursal',
    'getmovimientounitario': this.urlBase + 'api/getmovimientounitario',
    'update_sucursales': this.urlBase + 'api/update_sucursales',
    'DiasLaboralesRealizadosProd': this.urlBase + '/DiasLaboralesRealizadosProd/',


    //Envíos a servidor:
    'recepcionimagenclientesrrhh': this.urlServer + 'recepcionimagenclientesrrhh.php',
    'recepcionimagen1v1': this.urlServer + 'recepcionimagen1v1.php',
    'rotarImagen': this.urlServer + 'rotando.php',
    // NODE
    'TrabajadoresEnTurno': this.urlBaseNode + 'TrabajadoresEnTurno',

  };

}
