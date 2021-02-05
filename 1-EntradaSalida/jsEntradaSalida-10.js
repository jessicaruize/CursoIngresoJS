/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
// entradas : importe
// procesos : calcular el descuento del 25% - aplicar el descuento al importe (-)
// salidas : importe - 25%
	//"txtIdImporte"
	//"txtIdResultado"

	let importe;
	let resultado;
	let descuento;

	importe = parseInt(document.getElementById('txtIdImporte').value);
	descuento = importe * 0.25;
	resultado = importe - descuento;
	document.getElementById('txtIdResultado').value = resultado;
	


}

