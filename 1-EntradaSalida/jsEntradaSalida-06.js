/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	let sumar;

    num1 = document.getElementById('txtIdNumeroUno').value;
	num2 = document.getElementById('txtIdNumeroDos').value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	sumar = num1 + num2;
	alert("la suma es: " + sumar);

//parseInt() paranumeros entero
//parsefloat() para numeros decimales

}

