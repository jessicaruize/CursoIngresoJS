//Al ingresar una edad debemos informar solo si la persona es mayor de edad
//txtIdEdad

function mostrar()
{
	ler edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad>17)
	{
		alert("Es mayor de edad");
	}

	//tomo la edad  
	alert("ok");
	

}//FIN DE LA FUNCIÓN

/*
CPU(microprocesador) - unidad de control: ir a memoria buscar llevar etc
					 -unidad aretmetico logica: hace las operaciones.  
*/