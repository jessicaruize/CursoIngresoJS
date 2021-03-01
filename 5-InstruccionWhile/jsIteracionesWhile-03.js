/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var clave;
	clave = prompt("Ingrese la clave.","aquí.");
	while(clave != "utn750")
	{
		clave = prompt("ERROR, clave ingresada incorrecta, pruebe nuevamente.","aquí.");
	}


}//FIN DE LA FUNCIÓN

	