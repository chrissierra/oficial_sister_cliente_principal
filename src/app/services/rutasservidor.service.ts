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
    'HorasPorSucursalDia': this.urlBase + '/HorasPorSucursalDia/',
    'HorasPorSucursalMes': this.urlBase + '/HorasPorSucursalMes/',
    'LibroTipoPlanillaAsistencia': this.urlBase + 'LibroTipoPlanillaAsistencia/',
    
    'ingresarDocumento': this.urlBase + 'api/ingresarDocumento/',
    'GetDocumento': this.urlBase + 'api/GetDocumento/',

    'ingresarDocumentoPorTrabajador': this.urlBase + 'api/ingresarDocumentoPorTrabajador/',
    'GetDocumentoPorTrabajador': this.urlBase + 'api/GetDocumentoPorTrabajador/',
    'GetDocumentosGeneradorPorEmpresa': this.urlBase + 'api/GetDocumentosGeneradorPorEmpresa/',
    'ingresarResExtra': this.urlBase + 'api/ingresarResExtra/',
    'GetResExtra_unico': this.urlBase + 'api/GetResExtra_unico/',
    'GetResExtra_porSucursal': this.urlBase + 'api/GetResExtra_porSucursal', //?page=3
        'loginTrabajador': this.urlBase + 'api/loginTrabajador',


    'ingresardepartamento': this.urlBase + 'api/ingresardepartamento/',
    'actualizardepartamento': this.urlBase + 'api/actualizardepartamento/',
    'getdepartamento': this.urlBase + 'api/getdepartamento/',
    'deletedepartamento': this.urlBase + 'api/deletedepartamento/',
    'ingresar_centrocosto': this.urlBase + 'api/ingresar_centrocosto/',
    'actualizar_centrocosto': this.urlBase + 'api/actualizar_centrocosto/',
    'get_centrocosto': this.urlBase + 'api/get_centrocosto/',
    'delete_centrocosto': this.urlBase + 'api/delete_centrocosto/',
    'ingresarjefaturas': this.urlBase + 'api/ingresarjefaturas/',
    'actualizarjefaturas': this.urlBase + 'api/actualizarjefaturas/',
    'getjefaturas': this.urlBase + 'api/getjefaturas/',
    'deletejefaturas': this.urlBase + 'api/deletejefaturas/',

    'ingresar_horario_por_sucursal': this.urlBase + 'api/ingresar_horario_por_sucursal/',
    'actualizar_horario_por_sucursal': this.urlBase + 'api/actualizar_horario_por_sucursal/',
    'get_horario_por_sucursal': this.urlBase + 'api/get_horario_por_sucursal/',
    'delete_horario_por_sucursal': this.urlBase + 'api/delete_horario_por_sucursal/',
    'InsertContrasteFotograficoValidacion': this.urlBase + 'api/InsertContrasteFotograficoValidacion/',
    'getContrasteFotograficoValidacion': this.urlBase + 'api/getContrasteFotograficoValidacion/',
    'armarDocumento': this.urlBase + 'api/armarDocumento/',

    'getPostulantes': this.urlBase + 'api/getPostulantes/',
    'getTodos': this.urlBase + 'api/getTodos/',


    // Turnos sin terminar:
    'TurnosSinTerminar': this.urlBase + '/TurnosSinTerminar/',
    'TurnosSinTerminarPorTrabajador': this.urlBase + '/TurnosSinTerminarPorTrabajador/',
    'TurnosSinTerminarPorSucursal': this.urlBase + '/TurnosSinTerminarPorSucursal/',

    'getAsistenciaOfflineDiario': this.urlBase + 'api/getAsistenciaOfflineDiario',
    'getAsistenciaOfflineMensual': this.urlBase + 'api/getAsistenciaOfflineMensual',

    //Envíos a servidor:
    'recepcionimagenclientesrrhh': this.urlServer + 'recepcionimagenclientesrrhh.php',
    'recepcionimagen1v1': this.urlServer + 'recepcionimagen1v1.php',
    'rotarImagen': this.urlServer + 'rotando.php',
    // NODE
    'TrabajadoresEnTurno': this.urlBaseNode + 'TrabajadoresEnTurno',

  };

}
