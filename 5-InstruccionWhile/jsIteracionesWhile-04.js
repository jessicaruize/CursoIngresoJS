/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numero;
	numero = prompt("Ingrese un número entre 0 y 9.","Aquí.");
	while(numero < 0 || numero > 9)
	{
		numero = prompt("ERROR, ingrese un numero entre 0 y 9.","Aquí.");
	}
	txtIdNumero.value = numero;
	
}//FIN DE LA FUNCIÓN
