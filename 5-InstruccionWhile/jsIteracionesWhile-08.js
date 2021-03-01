/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var acumuladorNegativos;
	var acumuladorPositivos;
	var numero;
	var seguir;

	acumuladorPositivos = 0;
	acumuladorNegativos = 1;

	do
	{
		numero = prompt("Ingrese un número.","Aquí.");
		numero = parseInt(numero);

		if(numero > -1)
		{
			acumuladorPositivos = acumuladorPositivos + numero;
		}
		else 
		{
			acumuladorNegativos = acumuladorNegativos * numero;
		}

		seguir = prompt("¿Desea seguir?","si o no.");


	}while(seguir == "si")


	txtIdSuma.value = acumuladorPositivos;
	txtIdProducto.value = acumuladorNegativos;

}//FIN DE LA FUNCIÓN