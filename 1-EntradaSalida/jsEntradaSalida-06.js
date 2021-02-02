/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	var sumar;
numerouno = document.getElementById('txtIdNumeroUno');
numeroDos = document.getElementById('txtIdNumeroDos');

numeroUno = parseInt(numerouno);
numeroDos = parseInt(numeroDos);

sumar = numeroUno + numeroDos;
alert ("la suma es:" + suma);

}

