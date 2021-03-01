/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	var destinoIngresado;
	var mensaje;
	destinoIngresado= txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="En este destino hace frío.";
		break;
		default:
			mensaje="En este destino hace calor.";
		break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN