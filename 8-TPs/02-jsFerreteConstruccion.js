/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
//"txtIdLargo"
//"txtIdAncho"

let largo;
let ancho;
let perimetro;
let metroAlambre;


largo = document.getElementById('txtIdLargo').value;
ancho = document.getElementById('txtIdAncho').value;

largo = parseInt(largo);
ancho = parseInt(ancho);


perimetro = ( largo + ancho ) * 2;
metroAlambre = perimetro * 3;

alert ("La cantidad de alambre que requiere es: " + metroAlambre + " metros");


}
function Circulo () 
{
	//'txtIdRadio'
	let radioTerreno;
	let perimetro;
	let metroAlambre;

	radioTerreno = document.getElementById('txtIdRadio').value;
	radioTerreno = parseInt(radioTerreno);

	perimetro = 2 * Math.PI * radioTerreno ;

	metroAlambre = perimetro * 3;
	alert ("La cantidad de alambre que requiere es: " + metroAlambre + ".")

	//perimetro = 2 * PI * radio
	// PI =3,14  = Math.PI


}
function Materiales () 
{
	//area m2 = base m * haltura m
	// 1m2 = 3 cemento + 2 cal
	// Math.ceil (redondea para arriba)
 	//toFied (solo dos numero despues de la coma)

	let largo;
	let ancho;
	let area;
	let cemento;
	let cal;
	
	largo = document.getElementById('txtIdLargo').value;
	ancho = document.getElementById('txtIdAncho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	area = (largo * ancho) * 2;

	cemento = area * 3;
	cal = area * 2;

	alert ("Necesita " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");


}