/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
//"txtIdLargo"
//"txtIdAncho"
//"txtIdRadio"
var largo;
var ancho;
var radioTerreno;
var metroAlambre;

largo = document.getElementById('txtIdLargo').value;
ancho = document.getElementById('txtIdAncho').value;
largo = parseInt(largo);
ancho = parseInt (ancho);
radioTerreno = (largo * 2) + (ancho * 2);
document.getElementById('txtIdRadio').value = radioTerreno;
metroAlambre = radioTerreno * 3;
alert ("Ingresar medidad en metros")
alert ("La cantidad de alambre que requiere es: " + metroAlambre * "metros");


}
function Circulo () 
{
	
}
function Materiales () 
{
	
}