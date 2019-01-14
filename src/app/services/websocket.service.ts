import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
	public socketStatus:boolean = false;
  constructor(private socket_:Socket) {
  	this.checkStatus()
   }


  checkStatus(){
  	this.socket_.on('connect', ()=>{
  		console.log("Conectado al servidor");
  		this.socketStatus = true;
  	});

  	  	this.socket_.on('disconnect', ()=>{
  		console.log("Desconectado del  servidor");
  		this.socketStatus = false;
  	});
  } // Fin función checkStatus



  emit(event:string, payload?:any, callback?:Function){
  	this.socket_.emit(event, payload, callback)
  }

}
