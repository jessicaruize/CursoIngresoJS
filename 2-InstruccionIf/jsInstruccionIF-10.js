/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
	var nota;
	var mensaje;
	nota = Math.floor(Math.random() * 11);
	
	alert(nota);

	if(nota>8)
	{
		mensaje = "EXCELENTE.";
	}
	else
	{
		if(nota>3)
		{
			mensaje = "APROBO.";
		}
		else
		{
			mensaje = "Vamos, la proxima se puede.";
		}
	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN