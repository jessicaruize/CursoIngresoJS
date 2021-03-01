/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//txtIdNumeroUno
	//txtIdNumeroDos
let num1;
let num2;
let sumar;
num1 = document.getElementById('txtIdNumeroUno').value;
num2 = document.getElementById('txtIdNumeroDos').value;
num1 = parseInt(num1);
num2= parseInt(num2);
sumar = num1 + num2;
alert ("La suma es: " + sumar);
}

function restar()
{
	
let num1;
let num2;
let restar;
num1 = document.getElementById('txtIdNumeroUno').value;
num2 = document.getElementById('txtIdNumeroDos').value;
num1 = parseInt(num1);
num2 = parseInt(num2);
restar = num1 - num2;
alert ("La resta es: " + restar);

}

function multiplicar()
{ 
let num1;
let num2;
let multiplicar;
num1 = document.getElementById('txtIdNumeroUno').value;
num2 = document.getElementById('txtIdNumeroDos').value;
num1 = parseInt(num1);
num2 = parseInt(num2);
multiplicar = num1 * num2;
alert ("La multiplicacón es:" + multiplicar);
}

function dividir()
{
let num1;
let num2;
let restar;
num1 = document.getElementById('txtIdNumeroUno').value;
num2 = document.getElementById('txtIdNumeroDos').value;
num1 = parseInt(num1);
num2 = parseInt(num2);
dividir = num1 / num2;
alert ("La división es: " + dividir);
}

