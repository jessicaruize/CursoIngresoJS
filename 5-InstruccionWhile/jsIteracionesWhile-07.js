/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var seguir;
	var acumulador;
	var numero;
	contador = 0;
	acumulador = 0;

	do
	{
		numero = prompt("Ingrese un número.");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		contador ++;
		seguir = prompt("¿Desea seguir?","si o no.");
	}while(seguir == 'si')
	

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador / contador;

}//FIN DE LA FUNCIÓN