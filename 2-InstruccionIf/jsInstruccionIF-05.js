//txtIdEdad
//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{
	let edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad<13 || edad>17)
	{
		alert("No es adolecente");
	}

}//FIN DE LA FUNCIÓN

/*if(! (edad>12 && edad<18) )
{
	alert("No es adolecente");
} */