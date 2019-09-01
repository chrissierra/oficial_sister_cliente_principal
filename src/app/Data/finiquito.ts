var FiniquitoBase:any = 
	{ 	'pagos': [  
					{ 'label': 'Mes de aviso', 'valor': ''}, 
					{ 'label': 'Liquidación de sueldo', 'valor': '', 'liquidacion': true, 'fechaLiquidacion':''}, 
					{ 'label': 'Indemnización Sustitutiva', 'valor': ''}, 
					{ 'label': 'Vacaciones Proporcionales', 'valor': ''}, 
					{ 'label': 'Vacaciones Legales', 'valor': ''}
				],
		'Articulos': [  
						{ 'nombre': '159', 'numeros': [
							{'numero': 'N°1', 'nombre': 'Mutuo acuerdo de las partes'},
							{'numero': 'N°2', 'nombre': 'Renuncia del trabajador'},
							{'numero': 'N°3', 'nombre': 'Muerte del trabajador'},
							{'numero': 'N°4', 'nombre': 'Vencimiento del plazo convenido en el contrato'},
							{'numero': 'N°5', 'nombre': 'Conclusión del trabajo o servicio que dio origen al contrato'},
							{'numero': 'N°6', 'nombre': 'Caso fortuito o fuerza mayor'},
							{'numero': 'N°7', 'nombre': 'Mutuo acuerdo de las partes'},

						]}, 
						{ 'nombre': '160', 'numeros': [
							{'numero': 'N°1', 'nombre': 'Conductas indebidas de carácter grave', 'extra': true, 'puntos':[
																									{'A':'Falta de probidad del trabajador en el desempeño de sus funciones'},
																									{'B':'Conductas de acoso sexual'},
																									{'C':'Vías de hecho ejercidas por el trabajador en contra del empleador o de cualquier trabajador que se desempeñe en la misma empresa'},
																									{'D':'Injurias proferidas por el trabajador al empleador'},
																									{'E':'Conducta inmoral del trabajador que afecte a la empresa donde se desempeña'},
																									{'F':'Conductas de acoso laboral'},
																									]},
							{'numero': 'N°2', 'nombre': 'Negociaciones que ejecute el trabajador dentro del giro del negocio y que hubieren sido prohibidas por escrito en el respectivo contrato por el empleador'},
							{'numero': 'N°3', 'nombre': 'No concurrencia del trabajador a sus labores sin causa justificada durante dos días seguidos, dos lunes en el mes o un total de tres días durante igual período de tiempo; asimismo, la falta injustificada, o sin aviso previo de parte del trabajador que tuviere a su cargo una actividad, faena o máquina cuyo abandono o paralización signifique una perturbación grave en la marcha de la obra'},
							{'numero': 'N°4', 'nombre': 'Abandono del trabajo por parte del trabajador, entendiéndose por tal: a) la salida intempestiva e injustificada del trabajador del sitio de la faena y durante las horas de trabajo, sin permiso del empleador o de quien lo represente, y b) la negativa a trabajar sin causa justificada en las faenas convenidas en el contrato'},
							{'numero': 'N°5', 'nombre':'Actos, omisiones o imprudencias temerarias que afecten a la seguridad o al funcionamiento del establecimiento, a la seguridad o a la actividad de los trabajadores, o a la salud de éstos'},
							{'numero': 'N°6', 'nombre': 'El perjuicio material causado intencionalmente en las instalaciones, maquinarias, herramientas, útiles de trabajo, productos o mercaderías'},
							{'numero': 'N°7', 'nombre': 'Incumplimiento grave de las obligaciones que impone el contrato'},

						]}, 
						{ 'nombre': '161', 'numeros': [
							{'numero': 'N°1', 'nombre': 'Por necesidades de la empresa'},
						]}, 
						{ 'nombre': '163', 'numeros': [
							{'numero': 'N°1', 'nombre': 'Por procedimiento concursal de liquidación de bienes'},
						]}, 						
						
					],
		'Otros': [  
					{ 'label': 'Fecha Ingreso', 'valor': ''}, 
					{ 'label': 'Fecha Término', 'valor': ''}, 

				],
		'Seleccionado': false,

			   	
	}

export default FiniquitoBase;

/*

		Mes de aviso 
		Liquidación de sueldo 
		Indemnización Sustitutiva 
		Vacaciones Proporcionales 
		Vacaciones Legales

*/

