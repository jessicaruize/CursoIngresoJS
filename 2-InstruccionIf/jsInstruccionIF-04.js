//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
//txtIdEdad


function mostrar()
{
	let edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad>12 && edad<18)
	{
		alert("Es adolescente");
	}
	else
	{
		alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN
/* if(condicion1)
{
	if(condicion2)
	{
	
	}
}*/