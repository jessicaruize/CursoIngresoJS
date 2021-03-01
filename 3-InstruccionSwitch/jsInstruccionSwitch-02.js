function mostrar()
{

/* al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. */
	//tomo el mes


	var mesDelAño;
	var mensaje;
	mesDelAño = txtIdMes.value;

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensaje = "Ya paso el frio, ahora calor.";
		break;
		default:
			mensaje = "Falta para el invierno.";
		break;
	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN