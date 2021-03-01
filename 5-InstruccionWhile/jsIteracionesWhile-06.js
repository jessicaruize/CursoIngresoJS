function mostrar()
{
	
	var numero;
	var acumulador;
	var i;
	var promedio;

	i = 0;
	acumulador = 0;

	while(i < 5)
	{
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		i++;
	}

	promedio = acumulador / 5;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;







}//FIN DE LA FUNCIÓN