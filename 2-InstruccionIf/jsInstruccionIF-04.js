//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
//txtIdEdad


function mostrar()
{
	let edad
	edad = document.getElementById('txtIdEdad');
	edad = parseInt(edad);

	if(edad >13 && edad<17)
	{
		alert("Es adolescente");
	}
	else
	{
		alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN