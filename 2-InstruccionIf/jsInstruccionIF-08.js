function mostrar()
{
	var edadPersona;
	var estadoCivilPersona;

	edadPersona = txtIdEdad.value;
	edadPersona = parseInt(edadPersona);
	estadoCivilPersona = estadoCivil.value;

	if (edadPersona > 17 && estadoCivilPersona == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}


}//FIN DE LA FUNCIÓN