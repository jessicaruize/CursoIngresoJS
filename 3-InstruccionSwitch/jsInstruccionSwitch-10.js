/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación 
del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/

function mostrar()
{
	var estacion;
	var destino;
	var mensaje;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;

	if(estacion == "Invierno")
	{
		switch(destino)
		{
			case "Bariloche":
				mensaje = "Se viaja.";
			break;
			default:
				mensaje = "No se viaja.";
			break;
		}
	}
	else
	{
		if(estacion == "Verano")
		{
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja.";
				break;
				default:
					mensaje = "No se viaja."
				break;
			}
		}
		else
		{
			if(estacion == "Primavera")
			{
				switch(destino)
				{
					case "Bariloche":
						mensaje = "No se viaja.";
					break;
					default:
						mensaje = "Se viaja.";
					break;
				}
				

			}
			else
			{
				mensaje = "Se viaja.";
			}
		}
	}

	alert (mensaje);
	

}//FIN DE LA FUNCIÓN