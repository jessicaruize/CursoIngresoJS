/*
Al selecionar un destino , indicar el punto cardinal de 
nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado=txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Mar del plata":
			mensaje="Se encuentra en el Este.";
		break;
		case "Cataratas":
			mensaje="Se encuentra en el Norte.";
		break;
		default:
			mensaje="Se encuentra en el Sur.";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN