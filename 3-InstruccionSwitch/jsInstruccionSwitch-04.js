/*
al seleccionar un mes informar.
si tiene 28 días. feb
si tiene 30 días. abril-junio-septiembre-noviembre-
si tiene 31 días. enero- marzo-mayo-julio-agosto-octubre-diciembre
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;

	mesDelAño=txtIdMes.value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes tiene 28 días.";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Este mes tiene 30 días.";
		break;
		default:
			mensaje="Este mes tiene 31 días.";
		break;
	}
	alert(mensaje);
	



}//FIN DE LA FUNCIÓN