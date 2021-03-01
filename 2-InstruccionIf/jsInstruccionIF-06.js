function mostrar()
{
	
	let edad;

	edad= document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("Usted es mayor de edad.");
	}
	else
	{
		if(edad>12 && edad<18)
		{
			alert("Usted es adolecente.");
		}
		else
		{
			alert("Usted es un niño.");
		}
	}



}//FIN DE LA FUNCIÓN