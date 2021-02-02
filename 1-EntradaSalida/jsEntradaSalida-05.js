/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
	nombre = prompt("¿cómo es su nombre?");
	edad = prompt("¿cuántos años tiene?");
	document.getElementById('txtIdNombre') = nombre;
	documento.getElementById('txtIdEdad') = edad;
	alert(nombre + edad );
}

