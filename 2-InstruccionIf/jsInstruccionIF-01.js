function mostrar()
{
	//tomo la edad 
	//txtIdEdad
	//Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".

	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad==15)
	{
		alert("Niña bonita.");
	}


}//FIN DE LA FUNCIÓN

//operadores 
//aritmeticos: +, -, *, /, %
//relacionales: >, <, >=, <=, !=, ==
//logicos: &&(and), || (or),

/*
false = 0
true = cualquier cosa que no sea cero
*/