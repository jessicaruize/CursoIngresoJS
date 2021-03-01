/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var numero;
	var negativos; // suma de negativos.
	var positivos; // suma de positivos
	var ceros;
	var pares;
	var i;
	var f;
	var g;
	var h;
	var seguir;
	i = 0 // cantidad de negativos.
	f = 0 // cantidad de positivos.
	g = 0 // cantidad de ceros.
	h = 0 // cantidad de pares.
	positivos = 0;
	negativos = 0;
	do
	{
		numero = prompt("Ingrese un número.","Aquí");
		numero = parseInt(numero);

		if(numero > 0)
		{
			positivos = positivos + numero;
			f ++;
		}
		else
		{
			if(numero < 0)
			{
				negativos = negativos + numero;
				i ++;
			}
			else
			{
				g ++;
			}
		}

		if((numero%2) == 0)
		{
			h ++;
		}


		seguir = prompt("¿Desea seguir?","si o no");
	}while(seguir == "si")

	document.write("La suma de los negativos es: " + negativos + "<br>");
	document.write("La suma de los positivos es: " + positivos + "<br>");
	document.write("La cantidad de positivos es: " + f + "<br>");
	document.write("La cantidad de negativos es: " + i + "<br>");
	document.write("La cantidad de ceros es: " + g + "<br>");
	document.write("La cantidad de números pares es: " + h + "<br>");
	document.write("El promedio de positivos es: " + (positivos / f) + "<br>");
	document.write("El promedios de negativos es: " + (negativos / i) + "<br>");
	document.write("La diferencia entre positivos y negativos es: " + (positivos - negativos) + "<br>");

}//FIN DE LA FUNCIÓN

