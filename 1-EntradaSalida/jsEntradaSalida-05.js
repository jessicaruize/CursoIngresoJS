/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//creamos variables para guardar los datos del usuario y conseguimos el valor de cada caja de texto con el Id
	let nombre = document.getElementById('txtIdNombre').value;
	let edad = document.getElementById('txtIdEdad').value;
	
	//alert ("Usted se llama " + nombre+ " y tiene " + edad + " años " );
	
	alert (´Usted se llama ${nombre} y tiene ${edad} años´);
}

