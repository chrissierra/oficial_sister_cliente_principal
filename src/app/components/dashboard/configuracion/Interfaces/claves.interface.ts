import { Injectable } from '@angular/core';
@Injectable()
export class contrasenias {
    
            public arrayContrasenias:any[] = [
            
                { 
                    label: 'Clave Cliente',                                
                    rol:'cliente',
                    nombre_empresa:localStorage.getItem('nombre_empresa'),
                    rut:localStorage.getItem('rut_empresa'),
                    clave:'',
                    administrador_id:localStorage.getItem('id'),
                    select:false,
                    hidden:false,
                    info:'Escribe la clave que corresponderá al Dashboard de clientes',
                    tipo:'text'
                },

                { 
                    label: 'Clave Default',                  
                    rol:'trabajadores',
                    nombre_empresa:localStorage.getItem('nombre_empresa'),
                    rut:localStorage.getItem('rut_empresa'),
                    clave:'',
                    administrador_id:localStorage.getItem('id'),
                    select:false,
                    hidden:false,
                    info:'Escribe la clave para tus trabajadores',
                    tipo:'text'
                },

            ];


            public establecerArray(formulario:any){
              this.arrayContrasenias[0].clave = formulario.cliente;
              this.arrayContrasenias[1].clave = formulario.trabajadores;
             return this.arrayContrasenias;
            }
}    