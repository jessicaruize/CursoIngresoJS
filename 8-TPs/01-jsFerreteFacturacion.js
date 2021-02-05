/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//"txtIdPrecioUno"
	//"txtIdPrecioDos"
	//"txtIdPrecioTres"
	let precio1;
	let precio2;
	let precio3;
	let sumar;

	precio1 = document.getElementById('txtIdPrecioUno').value;
	precio2 = document.getElementById('txtIdPrecioDos').value;
	precio3 = document.getElementById('txtIdPrecioTres').value;

	precio1 = parseInt (precio1);
	precio2 = parseInt (precio2);
	precio3 = parseInt(precio3);

	sumar = precio1 + precio2 + precio3;

	alert ("la suma de los preductos es: " + sumar);


}
function Promedio () 
{
	let precio1;
	let precio2;
	let precio3;
	let promedio;

	precio1 = document.getElementById('txtIdPrecioUno').value;
	precio2 = document.getElementById('txtIdPrecioDos').value;
	precio3 = document.getElementById('txtIdPrecioTres').value;
	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	promedio = (precio1 + precio2 + precio3) / 3

	alert ("la promedio de los preductos es: " + promedio);


}
function PrecioFinal () 
{

	let precio1;
	let precio2;
	let precio3;
	let precioTotal;
	let iva
	let PrecioFinal;

	precio1 = document.getElementById('txtIdPrecioUno').value;
	precio2 = document.getElementById('txtIdPrecioDos').value;
	precio3 = document.getElementById('txtIdPrecioTres').value;
	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);
	precioTotal = precio1 + precio2 + precio3;
	iva = precioTotal * 0.21;
	PrecioFinal = precioTotal + iva;

	alert ("El precio final de los preductos es: " + PrecioFinal);




	
}