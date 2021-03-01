/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 
por cada estadia como base, se pide el ingreso de una estacion del año y localidad 
para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento 
del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento 
del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento 
del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
Curso de ingreso UTN FRA
*/


function mostrar()
{
	var base;
	var estacion;
	var destino;
	var mensaje;
	var porcentajeDiez;
	var porcentajeVeinte;
	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value; 

	base = 15000;
	porcentajeDiez = base * 0.1;
	porcentajeVeinte = base * 0.2;


	if (estacion == "Invierno")
	{
		switch(destino)
		{
			case "Bariloche":
				mensaje = "El precio final es: $" + (base + porcentajeVeinte); //aumento 20%
			break;
			case "Cataratas":
			case "Cordoba":
				mensaje = "El precio final es: $" + (base - porcentajeDiez); //descuento 10% 
			break;
			case "Mar del plata":
				mensaje = "El precio final es: $" + (base - porcentajeVeinte); //descuento 20%
			break;
		}
	}
	else 
	{
		if (estacion == "Verano") 
		{
			switch(destino)
			{
				case "Bariloche":
					mensaje = "El precio final es: $" + (base - porcentajeVeinte); // descuento 20%
				break;
				case "Cataratas":
				case "Cordoba":
					mensaje = "El precio final es: $" + (base + porcentajeDiez); //aumento 10% 
				break;
				case "Mar del plata":
					mensaje = "El precio final es: $" + (base + porcentajeVeinte); //aumento 20%
				break;
			}
		}
		else
		{
			switch(destino)
			{
				case "Cordoba":
					mensaje = "El precio final es: $" + (base); // s/d
				break;
				default:
					mensaje = "El precio final es: $" + (base + porcentajeDiez); // aumento 10%
				break;
			}
		}
	}
	
	alert (mensaje);

}//FIN DE LA FUNCIÓN