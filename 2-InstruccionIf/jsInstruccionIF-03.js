//txtIdEdad
//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

function mostrar()
{
	let edad;
	//tomo la edad  
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad>17)
	{
		alert("Es mayor de edad.");
	}

	else
	{
		alert("No es mayor de edad.");
	}

}//FIN DE LA FUNCIÓN