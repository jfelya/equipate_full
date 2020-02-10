function validacion_registro_usuario() 
{
	//LLENADO DE VARIABLES
	var nombre, apellido, usuario, correo, contrasena, contrasena2, 
	nivel, pregunta_secreta, respuesta_secreta, expresion;
	nombre = document.forms["registro_usuario"]["nombre"].value;
	apellido = document.forms["registro_usuario"]["apellido"].value;
	usuario = document.forms["registro_usuario"]["usuario"].value;
	correo = document.forms["registro_usuario"]["correo"].value;
	contrasena = document.forms["registro_usuario"]["contrasena"].value;
	contrasena2 = document.forms["registro_usuario"]["contrasena2"].value;
	nivel = document.forms["registro_usuario"]["nivel"].value.toLowerCase();
	pregunta_secreta = document.forms["registro_usuario"]["pregunta_secreta"].value;
	respuesta_secreta = document.forms["registro_usuario"]["respuesta_secreta"].value.toLowerCase();
	//LLENADO DE VARIABLES

	//Las expresiones se ponen entre dos slash, es decir: //
	expresion = /\w+@+[a-zA-Z]+\.+[a-zA-Z]{2,3}/;
	// \w Agarra todos los valores del alfabeto y los números
	// [a-z] Agarra todo el alfabeto 

	var ok = true;
	var msg = "";

	if (nombre == "" 
		|| apellido == "" 
		|| usuario == ""
		|| correo == ""
		|| contrasena == ""
		|| contrasena2 == ""
		|| nivel == ""
		|| pregunta_secreta == ""
		|| respuesta_secreta == "")
	{ //SI LOS CAMPOS ESTÁN VACÍOS
		msg += "Todos los campos son obligatorios\n";
		ok = false;
		return ok;
	} //SI LOS CAMPOS ESTÁN VACÍOS
	else
	{ //SI LOS CAMPOS NO ESTÁN VACÍOS
		if (nombre.length < 2 
			|| apellido.length < 2
			|| respuesta_secreta.length < 2)
		{ // SI LOS CAMPOS SON MENORES A DOS CARACTERES
			msg += "Los campos no pueden tener menos de dos caracteres\n";
			ok = false;
		} // SI LOS CAMPOS SON MENORES A DOS CARACTERES

		if (usuario.length < 4 
			|| contrasena.length < 4
			|| contrasena2.length < 4)
		{ // SI LOS CAMPOS SON MENORES A CUATRO CARACTERES
			msg += "Los campos usuario y contraseña no pueden tener menos de cuatro caracteres\n";
			ok = false;
		} // SI LOS CAMPOS SON MENORES A CUATRO CARACTERES

		if (nombre.length > 30 
			|| apellido.length > 30
			|| correo.length > 30
			|| contrasena.length > 30
			|| contrasena2.length > 20
			|| nivel.length > 30
			|| pregunta_secreta.length > 30
			|| respuesta_secreta.length > 30)
		{ // SI LOS CAMPOS SON MAYORES A TREINTA CARACTERES
			msg += "Los campos no pueden tener más de treinta caracteres\n";
			ok = false;
		} // SI LOS CAMPOS SON MAYORES A TREINTA CARACTERES

		if (usuario.length > 30) {
			msg += "El campos nombre no puede tener más de veinte caracteres\n";
			ok = false;
		}

		if (!expresion.test(correo))
		{ //SI EL CORREO INGRESADO NO ES VÁLIDO
			msg += "El correo no es válido\n";
			ok = false;
		} //SI EL CORREO INGRESADO NO ES VÁLIDO

		if (contrasena !== contrasena2)
		{ //SI LAS CONTRASEÑAS NO COINCIDEN
			msg += "Las contraseñas no coinciden\n";
			ok = false;
		} //SI LAS CONTRASEÑAS NO COINCIDEN

	//VALIDACIÓN PRINCIPAl
		if (ok == false)
		{ //SI HUBO ALGUN CAMPO NO VÁLIDO
			alert(msg);
			return ok;
		} //SI HUBO ALGUN CAMPO NO VÁLIDO
		else
		{ //SI TODOS LOS CAMPOS SON VÁLIDOS
			return ok;
		} //SI TODOS LOS CAMPOS SON VÁLIDOS
	//VALIDACIÓN PRINCIPAl
	} //SI LOS CAMPOS NO ESTÁN VACÍOS
}