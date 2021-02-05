/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
//txtIdSueldo
//txtIdResultado
	let Sueldo;
	let resultado;
	let aumento;
	sueldo = parseInt(document.getElementById('txtIdSueldo').value);
	aumento = sueldo * 0.1;
	resultado = aumento + sueldo;
	document.getElementById('txtIdResultado').value = resultado;



	//resultado = parseInt(document.getElementById('txtIdResultado').value);



}
