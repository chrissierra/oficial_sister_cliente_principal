import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class GeneradorDocumentosService {

  constructor() { }

generarFiniquito(articulo, Compendio, pp, ciudad){
// You'll need to make your image into a Data URL
// Use http://dataurl.net/#dataurlmaker
var doc = new jsPDF()

doc.setFontSize(10)
doc.text(20, 35, 'ASESORIAS AGR CIA. LTDA.')
doc.text(20, 39, "Rut: " + this.format(localStorage.getItem('rut_empresa')) )
doc.text(20, 43, 'Calle negrete n°1871' )
doc.text(20, 47, 'Conchalí-Santiago')

doc.setFontSize(12)
doc.text(105, 60, 'FINIQUITO DE TRABAJO', {align:'center'})

doc.text(20, 80, "En "+ciudad.charAt(0).toUpperCase() + ciudad.slice(1)+ "  a "+moment().locale("es").format('LL')+", ASESORIAS A.G.R. COMPAÑÍA LIMITADA, Rut: " + this.format(localStorage.getItem('rut_empresa')) +" representada en este acto por don LUIS ALFREDO GALDAMES ROJO, cédula nacional N° 6.248.002-5 en adelante El Empleador, y don (ña) CONSTANZA JAVIERA HENRIQUEZ MUÑOZ, cédula  de identidad N° 18.626.339-1 domiciliada AV. MEXICO N° 0764, comuna de RECOLETA en adelante “El Trabajador” vienen en suscribir el presente finiquito.",  {align:'justify' , maxWidth:180})


doc.text(20, 123, "PRIMERO: Las partes dejan constancia que la relación laboral se inició con fecha 01 de  ABRIL de  2019 y concluyó el día 10 de JULIO de 2019.",  {align:'justify' , maxWidth:180})

doc.text(20, 143, "SEGUNDO: El término de la relación laboral se verificó por la causal del Artículo 159, Número 2 del Código del Trabajo, esto es, RENUNCIA VOLUNTARIA.",  {align:'justify' , maxWidth:180})

doc.text(20, 163, "TERCERO: En este acto, el Empleador paga al Trabajador, lo siguiente:",  {align:'justify' , maxWidth:180})
doc.setFontSize(11)
doc.text(20, 175, "- Vacaciones proporcionales",  {align:'justify' , maxWidth:180})
doc.text('$45.000', 200, 175, null, null, 'right');

doc.text(20, 183, "- Liquidación de sueldo mes Julio 2019",  {align:'justify' , maxWidth:180})
doc.text('$45.000', 200, 183, null, null, 'right');

doc.text(20, 191, "- Indemnización Sustitutiva",  {align:'justify' , maxWidth:180})
doc.text('$45.000', 200, 191, null, null, 'right');

doc.text(20, 199, "- Mes de aviso",  {align:'justify' , maxWidth:180})
doc.text('$45.000', 200, 199, null, null, 'right');

doc.text(20, 207, "- Vacaciones legales",  {align:'justify' , maxWidth:180})
doc.text('$45.000', 200, 207, null, null, 'right');

doc.setFontSize(12)
doc.text(20, 223, "CUARTO: El trabajador acepta y está conforme con el monto indicado en la cláusula precedente, y declara haber recibido el pago de la suma a plena conformidad.",  {align:'justify' , maxWidth:180})

doc.text(20, 249, "QUINTO: Doña CONSTANZA HENRIQUEZ MUÑOZ, deja constancia que durante el tiempo que prestó servicios a ASESORIAS A.G.R. COMPAÑÍA LIMITADA recibió de forma correcta y oportunamente el total de las remuneraciones convenidas, de acuerdo a su contrato de trabajo, clase de trabajo ejecutado, reajustes legales, feriados legales en conformidad a la ley y que nada se le adeuda por los conceptos antes indicados ni por ningún otro, sea de origen legal o contractual derivado de la prestación de sus servicios. ",  {align:'justify' , maxWidth:180})

doc.addPage('a4');

doc.text(20, 20, "Motivo por el cual, no teniendo reclamo ni cargo alguno que formular en contra de ASESORIAS A.G.R. COMPAÑÍA LIMITADA ni en contra de don LUIS ALFREDO GALDAMES ROJO, ni en contra de DANHER CORPGRUP COMPAÑIA LIMITADA, ni empresas relacionadas ni filiales, por lo que otorga el más amplio y total finiquito, renunciando expresamente a las acciones de naturaleza laboral, penal, civil o administrativa en contra de ASESORIAS A.G.R. COMPAÑÍA LIMITADA, LUIS ALFREDO GALDAMES ROJO, SOCIEDAD DANHER LIMITADA, así como respecto de empresas relacionadas o filiales, declaración que formula libre y espontáneamente, en perfecto y cabal conocimiento de cada uno de todos sus derechos, sin perjuicio de reservarse el derecho a exigir el cumplimiento de las obligaciones asumidas en este contrato.                     ",  {align:'justify' , maxWidth:180})

doc.text(20, 85, "SEXTO: Las partes asimismo se otorgan el más completo y amplio finiquito respecto de cualquier accidente laboral o enfermedad profesional que haya tenido su origen durante la relación laboral, renunciando el Trabajador a ejercer todo tipo de acciones.",  {align:'justify' , maxWidth:180})

doc.text(20, 110, "SEPTIMO: Se suscribe el presente finiquito en dos ejemplares, quedando uno en poder de la cada parte.",  {align:'justify' , maxWidth:180})

    doc.line(20, 250, 70, 250) // horizontal line
    doc.text(45,260,"TRABAJADOR", {align:'center' , maxWidth:40})
    doc.text(45,265,"RUT 17.961.493-6", {align:'center' , maxWidth:60})
    doc.text(45,270,"CHRISTOPHER SIERRA MELÉNDEZ", {align:'center' , maxWidth:60})
  
    doc.line(145, 250, 190, 250) // horizontal line
    doc.text(165,260,"EMPLEADOR", {align:'center' , maxWidth:40})
    doc.text(165,265,"Rut: " + this.format(localStorage.getItem('rut_empresa')), {align:'center' , maxWidth:60})
    if(pp){
      doc.text(165,270,"PP " + localStorage.getItem('nombre_rep'), {align:'center' , maxWidth:70})
    }else{
      doc.text(165,270,localStorage.getItem('nombre_rep'), {align:'center' , maxWidth:70})
    }

 doc.save('temp.pdf');

}

 format(input)
    {

    var lastChar = input.substr(input.length - 1); // => "1"
    let rut_por_formatear = input.replace(lastChar, '')
    rut_por_formatear = rut_por_formatear;
    input = rut_por_formatear;

    var num = input.replace(/\./g,'');
    if(!isNaN(num)){
    num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
    num = num.split('').reverse().join('').replace(/^[\.]/,'');
    input = num;
    }
      
    else{ //alert('Solo se permiten numeros');
    input = input.replace(/[^\d\.]*/g,'');
    }

    return input + "-" + lastChar;
  }

generarPDFDocumentoTipoCarta(datos, imagen, ciudad, nombre, apellido, rut){

    let doc = new jsPDF();
    let dim:number =0
    let arrayDocumento = datos.CuerpoDocumento.split('<<SALTODELINEA>>')
    console.log(arrayDocumento)

    // Imagen Cabecera Logo
    doc.addImage(imagen, 'JPEG', 15, 10,20, 20);

    doc.setFontSize(10)
    doc.text(20, 35, 'Sr.')
    doc.text(20, 41, nombre + " "+ apellido)
    doc.text(20, 47, 'Rut: ' + rut)
    doc.text(20, 53, 'Presente.')

    // Titulo    
    doc.setFontSize(16)     //doc.text(65, 40, datos.titulo, {align:'right'}) 
    var textWidth = doc.getStringUnitWidth(datos.titulo) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
    doc.text(textOffset, 60, datos.titulo);
  
    //Cabecera
    doc.setFontSize(10)
    doc.text(120,10, ciudad +', '+moment().locale("es").format('LL'))

    // Cuerpo Documento    
    //console.log(doc.getTextDimensions(arrayDocumento))
    //doc.text(20, 60, arrayDocumento,  {align:'justify' , maxWidth:180})  
    //doc.text(20, dimensiones.h, "HOLAAA Q TALLLLL")
    doc.setFontSize(10)
    for (var i = 0; i < arrayDocumento.length; ++i) {
          // code...
          if(i === 0){
            //dim = (doc.getTextDimensions(arrayDocumento[i]).w / 30) + dim + 30;
            doc.text(20, 80, arrayDocumento[i],  {align:'justify' , maxWidth:180})
            console.log("i === 0",  arrayDocumento[i])
          }else{
            
            dim = ( doc.getTextDimensions(arrayDocumento[i-1]).w / 27 ) + dim + 7;
       
            doc.text(20, ((dim + 80)) , arrayDocumento[i],  {align:'justify' , maxWidth:180})


            var textWidth = doc.getStringUnitWidth(arrayDocumento[i-1]) * doc.internal.getFontSize() / doc.internal.scaleFactor;
            var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
            console.log("VALOR DE I: " + i + " | Valor que usa ->" + textWidth , doc.getTextDimensions(arrayDocumento[i-1]).w )

          }   

    }
    
   // var lMargin=15; //left margin in mm
   // var rMargin=15; //right margin in mm
   // var pdfInMM=210;  // width of A4 in mm
   // var lines =doc.splitTextToSize(datos.CuerpoDocumento, (pdfInMM-lMargin-rMargin));
   //doc.text(lMargin,20,lines);

    // Firma
    let firma = JSON.parse(datos.firmas)
    //console.log(JSON.parse(firma))

    let conteo = 0;
    firma.map(data => {
      if(data.estado) conteo++;
    })

    if(conteo == 0){

    }else if(conteo == 1){
        let textWidth = doc.getStringUnitWidth(firma[0].valor) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        let textOffset = (doc.internal.pageSize.width - textWidth) / 2;
        //doc.text(textOffset, 40, datos.titulo);



        doc.line(textOffset, 250, 135, 250) // horizontal line
        doc.text(textOffset,260,firma[0].valor)
    }else if(conteo == 2){
    doc.line(20, 250, 70, 250) // horizontal line
    doc.text(45,260,firma[0].valor, {align:'center' , maxWidth:40})
  
    doc.line(145, 250, 190, 250) // horizontal line
    doc.text(165,260,firma[1].valor, {align:'center' , maxWidth:40})
    }else if(conteo == 3){
    
      doc.line(20, 250, 70, 250) // horizontal line
    doc.text(40,260,firma[0].valor, {align:'center' , maxWidth:40})

    doc.line(90, 250, 135, 250) // horizontal line
    doc.text(110,260,firma[1].valor, {align:'center' , maxWidth:40})


    doc.line(145, 250, 190, 250) // horizontal line
    doc.text(155,260,firma[2].valor, {align:'center' , maxWidth:40})

    }  



    doc.save('temp.pdf');

  }// Fin función liquidacionApdf

  generarPDFDocumento(datos, imagen, ciudad){

  	let doc = new jsPDF();
  	let dim:number =0
  	let arrayDocumento = datos.CuerpoDocumento.split('<<SALTODELINEA>>')
    console.log(arrayDocumento)

  	// Imagen Cabecera Logo
    doc.addImage(imagen, 'JPEG', 15, 10,20, 20);

  	// Titulo  	
	  doc.setFontSize(16)     //doc.text(65, 40, datos.titulo, {align:'right'}) 
    var textWidth = doc.getStringUnitWidth(datos.titulo) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
    doc.text(textOffset, 40, datos.titulo);
	
    //Cabecera
  	doc.setFontSize(12)
    doc.text(120,10, ciudad +', '+moment().locale("es").format('LL'))

  	// Cuerpo Documento  	
  	//console.log(doc.getTextDimensions(arrayDocumento))
	  //doc.text(20, 60, arrayDocumento,  {align:'justify' , maxWidth:180})	
	  //doc.text(20, dimensiones.h, "HOLAAA Q TALLLLL")
    doc.setFontSize(10)
  	for (var i = 0; i < arrayDocumento.length; ++i) {
      		// code...
          if(i === 0){
            //dim = (doc.getTextDimensions(arrayDocumento[i]).w / 30) + dim + 30;
            doc.text(20, 60, arrayDocumento[i],  {align:'justify' , maxWidth:180})
            console.log("i === 0",  arrayDocumento[i])
          }else{
            
            dim = ( doc.getTextDimensions(arrayDocumento[i-1]).w / 27 ) + dim + 7;
       
            doc.text(20, ((dim + 60)) , arrayDocumento[i],  {align:'justify' , maxWidth:180})


            var textWidth = doc.getStringUnitWidth(arrayDocumento[i-1]) * doc.internal.getFontSize() / doc.internal.scaleFactor;
            var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
            console.log("VALOR DE I: " + i + " | Valor que usa ->" + textWidth , doc.getTextDimensions(arrayDocumento[i-1]).w )

          }   

  	}
  	
   // var lMargin=15; //left margin in mm
   // var rMargin=15; //right margin in mm
   // var pdfInMM=210;  // width of A4 in mm
   // var lines =doc.splitTextToSize(datos.CuerpoDocumento, (pdfInMM-lMargin-rMargin));
   //doc.text(lMargin,20,lines);

  	// Firma
  	let firma = JSON.parse(datos.firmas)
    //console.log(JSON.parse(firma))

  	let conteo = 0;
  	firma.map(data => {
  		if(data.estado) conteo++;
  	})

  	if(conteo == 0){

  	}else if(conteo == 1){
        let textWidth = doc.getStringUnitWidth(firma[0].valor) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        let textOffset = (doc.internal.pageSize.width - textWidth) / 2;
        //doc.text(textOffset, 40, datos.titulo);



    		doc.line(90, 250, 135, 250) // horizontal line
    		doc.text(textOffset,260,firma[0].valor)
  	}else if(conteo == 2){
    		doc.line(20, 250, 70, 250) // horizontal line
    		doc.text(45,260,firma[0].valor, {align:'center' , maxWidth:40})
    	
    		doc.line(145, 250, 190, 250) // horizontal line
    		doc.text(165,260,firma[1].valor, {align:'center' , maxWidth:40})
  	}else if(conteo == 3){
  	
    		doc.line(20, 250, 70, 250) // horizontal line
    		doc.text(40,260,firma[0].valor, {align:'center' , maxWidth:40})

    		doc.line(90, 250, 135, 250) // horizontal line
    		doc.text(110,260,firma[1].valor, {align:'center' , maxWidth:40})


    		doc.line(145, 250, 190, 250) // horizontal line
    		doc.text(155,260,firma[2].valor, {align:'center' , maxWidth:40})

  	}	



    doc.save('temp.pdf');

  }// Fin función liquidacionApdf



generarPDFDocumentoFromServer(datos, imagen, ciudad){

    let doc = new jsPDF();
    let dim:number =0
    let arrayDocumento = datos.CuerpoDocumento.split('<<SALTODELINEA>>')
    console.log(arrayDocumento)

    // Imagen Cabecera Logo
    doc.addImage(imagen, 'JPEG', 15, 10,20, 20);

    // Titulo    
    doc.setFontSize(16)     //doc.text(65, 40, datos.titulo, {align:'right'}) 
    var textWidth = doc.getStringUnitWidth(datos.titulo) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
    doc.text(textOffset, 40, datos.titulo);
  
    //Cabecera
    doc.setFontSize(10)
    doc.text(120,10, ciudad +', '+datos.fecha_emision)

    // Cuerpo Documento    
    //console.log(doc.getTextDimensions(arrayDocumento))
    //doc.text(20, 60, arrayDocumento,  {align:'justify' , maxWidth:180})  
    //doc.text(20, dimensiones.h, "HOLAAA Q TALLLLL")
    doc.setFontSize(10)
    for (var i = 0; i < arrayDocumento.length; ++i) {
          // code...
          if(i === 0){
            //dim = (doc.getTextDimensions(arrayDocumento[i]).w / 30) + dim + 30;
            doc.text(20, 60, arrayDocumento[i],  {align:'justify' , maxWidth:180})
            console.log("i === 0",  arrayDocumento[i])
          }else{
            
            dim = ( doc.getTextDimensions(arrayDocumento[i-1]).w / 27 ) + dim + 7;
       
            doc.text(20, ((dim + 60)) , arrayDocumento[i],  {align:'justify' , maxWidth:180})


            var textWidth = doc.getStringUnitWidth(arrayDocumento[i-1]) * doc.internal.getFontSize() / doc.internal.scaleFactor;
            var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
            console.log("VALOR DE I: " + i + " | Valor que usa ->" + textWidth , doc.getTextDimensions(arrayDocumento[i-1]).w )

          }   

    }
    
   // var lMargin=15; //left margin in mm
   // var rMargin=15; //right margin in mm
   // var pdfInMM=210;  // width of A4 in mm
   // var lines =doc.splitTextToSize(datos.CuerpoDocumento, (pdfInMM-lMargin-rMargin));
   //doc.text(lMargin,20,lines);

    // Firma
    let firma = JSON.parse(datos.firmas)
    firma = JSON.parse(firma)
    
    let conteo = 0;
    firma.map(data => {
      if(data.estado) conteo++;
    })

    if(conteo == 0){

    }else if(conteo == 1){
        let textWidth = doc.getStringUnitWidth(firma[0].valor) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        let textOffset = (doc.internal.pageSize.width - textWidth) / 2;
        //doc.text(textOffset, 40, datos.titulo);



        doc.line(90, 250, 135, 250) // horizontal line
        doc.text(textOffset,260,firma[0].valor)
    }else if(conteo == 2){
    doc.line(20, 250, 70, 250) // horizontal line
    doc.text(45,260,firma[0].valor, {align:'center' , maxWidth:40})
  
    doc.line(145, 250, 190, 250) // horizontal line
    doc.text(165,260,firma[1].valor, {align:'center' , maxWidth:40})
    }else if(conteo == 3){
    
      doc.line(20, 250, 70, 250) // horizontal line
    doc.text(40,260,firma[0].valor, {align:'center' , maxWidth:40})

    doc.line(90, 250, 135, 250) // horizontal line
    doc.text(110,260,firma[1].valor, {align:'center' , maxWidth:40})


    doc.line(145, 250, 190, 250) // horizontal line
    doc.text(155,260,firma[2].valor, {align:'center' , maxWidth:40})

    }  



    doc.save('temp.pdf');

  }// Fin función liquidacionApdf






  generarPDFDocumentoFromServerTipoCarta(datos, imagen, ciudad, nombre, apellido, rut){

    let doc = new jsPDF();
    let dim:number =0
    let arrayDocumento = datos.CuerpoDocumento.split('<<SALTODELINEA>>')
    console.log(arrayDocumento)

    // Imagen Cabecera Logo
    doc.addImage(imagen, 'JPEG', 15, 10,20, 20);

    // Titulo    
    doc.setFontSize(16)     //doc.text(65, 40, datos.titulo, {align:'right'}) 
    var textWidth = doc.getStringUnitWidth(datos.titulo) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
    doc.text(textOffset, 60, datos.titulo);
    
    // Cabecera Carta
    doc.setFontSize(10)
    doc.text(20, 35, 'Sr.')
    doc.text(20, 41, nombre + " "+  apellido )
    doc.text(20, 47, 'Rut: ' + rut)
    doc.text(20, 53, 'Presente.')


    //Cabecera
    doc.setFontSize(10)
    doc.text(120,10, ciudad +', '+datos.fecha_emision)

    // Cuerpo Documento    
    //console.log(doc.getTextDimensions(arrayDocumento))
    //doc.text(20, 60, arrayDocumento,  {align:'justify' , maxWidth:180})  
    //doc.text(20, dimensiones.h, "HOLAAA Q TALLLLL")
    doc.setFontSize(10)
    for (var i = 0; i < arrayDocumento.length; ++i) {
          // code...
          if(i === 0){
            //dim = (doc.getTextDimensions(arrayDocumento[i]).w / 30) + dim + 30;
            doc.text(20, 80, arrayDocumento[i],  {align:'justify' , maxWidth:180})
            console.log("i === 0",  arrayDocumento[i])
          }else{
            
            dim = ( doc.getTextDimensions(arrayDocumento[i-1]).w / 27 ) + dim + 7;
       
            doc.text(20, ((dim + 80)) , arrayDocumento[i],  {align:'justify' , maxWidth:180})


            var textWidth = doc.getStringUnitWidth(arrayDocumento[i-1]) * doc.internal.getFontSize() / doc.internal.scaleFactor;
            var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
            console.log("VALOR DE I: " + i + " | Valor que usa ->" + textWidth , doc.getTextDimensions(arrayDocumento[i-1]).w )

          }   

    }
    
   // var lMargin=15; //left margin in mm
   // var rMargin=15; //right margin in mm
   // var pdfInMM=210;  // width of A4 in mm
   // var lines =doc.splitTextToSize(datos.CuerpoDocumento, (pdfInMM-lMargin-rMargin));
   //doc.text(lMargin,20,lines);

    // Firma
    let firma = JSON.parse(datos.firmas)
    firma = JSON.parse(firma)
    
    let conteo = 0;
    firma.map(data => {
      if(data.estado) conteo++;
    })

    if(conteo == 0){

    }else if(conteo == 1){
        let textWidth = doc.getStringUnitWidth(firma[0].valor) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        let textOffset = (doc.internal.pageSize.width - textWidth) / 2;
        //doc.text(textOffset, 40, datos.titulo);



        doc.line(textOffset, 250, 135, 250) // horizontal line
        doc.text(textOffset,260,firma[0].valor)
    }else if(conteo == 2){
    doc.line(20, 250, 70, 250) // horizontal line
    doc.text(45,260,firma[0].valor, {align:'center' , maxWidth:40})
  
    doc.line(145, 250, 190, 250) // horizontal line
    doc.text(165,260,firma[1].valor, {align:'center' , maxWidth:40})
    }else if(conteo == 3){
    
      doc.line(20, 250, 70, 250) // horizontal line
    doc.text(40,260,firma[0].valor, {align:'center' , maxWidth:40})

    doc.line(90, 250, 135, 250) // horizontal line
    doc.text(110,260,firma[1].valor, {align:'center' , maxWidth:40})


    doc.line(145, 250, 190, 250) // horizontal line
    doc.text(155,260,firma[2].valor, {align:'center' , maxWidth:40})

    }  



    doc.save('temp.pdf');

  }// Fin función liquidacionApdf















}
