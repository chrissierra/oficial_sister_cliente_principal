import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutasservidorService } from './rutasservidor.service';

@Injectable()
export class LibroremuneracionesService {

  constructor(private http: HttpClient, private rutasService_: RutasservidorService) { }

    GetLibroDiario(data) {
		return this.http.post(this.rutasService_.rutas['libroremuneraciondiario'], JSON.stringify(data));     
 	} // Fin funcion login

 	GetLibroMensual(data) {
		return this.http.post(this.rutasService_.rutas['libroremuneracionmensual'], JSON.stringify(data));     
 	} // Fin funcion login


	GetdiarioPorTrabajador(data) {
		return this.http.post(this.rutasService_.rutas['diarioPorTrabajador'], JSON.stringify(data));     
 	} // Fin funcion login

 	GetmensualPorTrabajador(data) {
		return this.http.post(this.rutasService_.rutas['mensualPorTrabajador'], JSON.stringify(data));     
 	} // Fin funcion login

    GetmensualPorSucursal(data) {
		return this.http.post(this.rutasService_.rutas['mensualPorSucursal'], JSON.stringify(data));     
 	} // Fin funcion login

 	GetdiarioPorSucursal(data) {
		return this.http.post(this.rutasService_.rutas['diarioPorSucursal'], JSON.stringify(data));     
 	} // Fin funcion login

 	GetdiarioUltimos(data) {
		return this.http.post(this.rutasService_.rutas['diarioUltimos'], JSON.stringify(data));     
 	} // Fin funcion login


 	actualmenteTrabajando(data) {
		return this.http.post(this.rutasService_.rutas['actualmenteTrabajando'],JSON.stringify(data));     
 	} // Fin funcion login


 	actualmenteTrabajandoPorSucursal(data) {
		return this.http.post(this.rutasService_.rutas['actualmenteTrabajandoPorSucursal'],JSON.stringify(data));     
 	} // Fin funcion login

 	getmovimientounitario(data) {
		return this.http.post(this.rutasService_.rutas['getmovimientounitario'],JSON.stringify(data));     
 	} // Fin funcion login

 	getMovimientosOfflineMensual(data) {
		return this.http.post(this.rutasService_.rutas['getAsistenciaOfflineMensual'],JSON.stringify(data));     
 	} // Fin funcion login

 	getMovimientosOfflineDiario(data) {
		return this.http.post(this.rutasService_.rutas['getAsistenciaOfflineDiario'],JSON.stringify(data));     
 	} // Fin funcion login


 	TurnosSinTerminar(usuario_cliente, mes, anio) {
		return this.http.get(this.rutasService_.rutas['TurnosSinTerminar'] +usuario_cliente + '/' + mes+ '/' + anio );     
 	} // Fin funcion login

 	TurnosSinTerminarPorTrabajador(id_trabajador, mes, anio) {
		return this.http.get(this.rutasService_.rutas['TurnosSinTerminarPorTrabajador']+id_trabajador + '/' +mes + '/' + anio);     
 	} // Fin funcion login


 	TurnosSinTerminarPorSucursal(usuario_cliente, mes, anio, sucursal) {
		return this.http.get(this.rutasService_.rutas['TurnosSinTerminarPorSucursal']+usuario_cliente + '/' +mes  + '/' +anio + '/' + sucursal);     
 	} // Fin funcion login

 	HorasPorSucursalDia(usuario_cliente, mes, anio, dia, sucursal) {
		return this.http.get(this.rutasService_.rutas['HorasPorSucursalDia']+usuario_cliente + '/' +mes  + '/' +anio  + '/' +dia + '/' +sucursal);     
 	} // Fin funcion login


 	HorasPorSucursalMes(usuario_cliente, mes, anio, sucursal) {
 		console.log(mes + '/'+ anio)
		return this.http.get(this.rutasService_.rutas['HorasPorSucursalMes']+usuario_cliente + '/' +mes  + '/' +anio + '/' + sucursal);     
 	} // Fin funcion login
}
