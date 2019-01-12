import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RutasservidorService } from './rutasservidor.service';
@Injectable({
  providedIn: 'root'
})
export class ClientesrrhhService {

  constructor(public http: HttpClient, 
              private rutasService_: RutasservidorService) { }

  public updateClientes(data){
        return this.http.post(this.rutasService_.rutas['actualizarDatosClientes'] , JSON.stringify(data));

  }

  public GetClientes(data){
        return this.http.post(this.rutasService_.rutas['GetDatosClientes'] , JSON.stringify(data));

  }


 public setearArrayCliente(cliente){
   console.log(cliente)
   console.log(cliente.nombre_empresa)
    this.array_cliente[0].value=cliente[0].nombre_empresa
    this.array_cliente[1].value=cliente[0].nombre_rep
    this.array_cliente[2].value=cliente[0].email
    this.array_cliente[3].value=cliente[0].numero
    this.array_cliente[4].value=cliente[0].direccion
    this.array_cliente[5].value=cliente[0].website
    this.array_cliente[6].value=cliente[0].claveTextual
    this.array_cliente[7].value=cliente[0].textarea
    this.array_cliente[8].value=cliente[0].rut_empresa
    this.array_cliente[9].value=cliente[0].rut_rep
    this.array_cliente[10].value=cliente[0].giro
    this.array_cliente[11].value=cliente[0].numero_empleados
    this.array_cliente[12].value=cliente[0].estatus
  
    return this.array_cliente;
  }

  public array_cliente: any[] = [
    {
      label: 'Nombre Empresa',
      name: 'nombre_empresa',
      tipo: 'text',
      select: false,
      value:''

    },
    {
      label: 'Nombre Representante Legal',
      name: 'nombre_rep',
      tipo: 'text',
      select: false,
      value:''

    },
     {
      label: 'Email',
      name: 'email',
      tipo: 'text',
      info: '',
      select: false,
      value:''
    },
    {
      label: 'Fono',
      name: 'numero',
      tipo: 'text',
      select: false,
      value:''

    },
        {
      label: 'Dirección',
      name: 'direccion',
      tipo: 'text',
      select: false

    },
    {
      label: 'Sitio Web',
      name: 'website',
      tipo: 'text',
       info: 'Opcional',
      select: false

    },
    {
      label: 'Clave',
      name: 'claveTextual',
      tipo: 'text',
      info: '',
      select: false,
      value:''

    },
    {
      label: 'Info',
      name: 'textarea',
      tipo: 'text',
      select: false,
      value:''

    },
    {
      label: 'Rut Empresa',
      name: 'rut_empresa',
      tipo: 'text',
      select: false,
      value:''

    },
   
    {
      label: 'Rut Rep. Legal',
      name: 'rut_rep',
      tipo: 'text',
      select: false,
      value:''
    },
    {
      label: 'Giro',
      name: 'giro',
      tipo: 'text',
      select: false,
      value:''

    },
    {
      label: 'N° Empleados',
      name: 'numero_empleados',
      tipo: 'number',
      info: 'Opcionalmente puedes actualizar el n° de trabajadores de tu empresa',
      select: false,
      value:''

    },
    {
     
      name: 'estatus',
      tipo: 'hidden',
      select: false,
      value:''

    },
    {
     
      name: 'id',
      tipo: 'hidden',
      select: false,
      value: localStorage.getItem('id')

    },
   
    

  ];
}
