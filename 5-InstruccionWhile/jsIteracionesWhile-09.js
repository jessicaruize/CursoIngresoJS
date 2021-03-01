/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
	var numero;
	var minimo;
	var maximo;
	var seguir;
	var flag;

	flag = 0;

	do
	{
		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);

		if((flag == 0) || (numero < minimo))
		{
			minimo = numero;
		}
		if ((flag == 0) || (numero > maximo))
		{
			maximo = numero;
			flag = 1;
		}
		seguir = prompt("¿Desea seguir?","si o no.")
	}while(seguir == "si")

	txtIdMaximo.value = maximo;
	txtIdMinimo.value = minimo;
}//FIN DE LA FUNCIÓN