/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar ()
{
    var sexo;
    sexo = prompt("Ingrese f si es femenino o m si es masculino.");

    while (sexo != "m" && sexo != "f")
    {
        sexo = prompt("ERROR, ingrese nuevamente.");
    }
    txtIdSexo.value = sexo;
} //FIN DE LA FUNCIÓN
