/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo espacio en memoria para guardar el nombre del ususario
	let nombre;

	//guardo el la variable nombre el texto que escribio el usuario dentro de la ventana prompt
nombre = prompt ("ingrese su nombre");

	//copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto enbebida en la pagina
document.getElementById("txtIdNombre").value = nombre;
}

