//bucle while que cuenta desde el uno hasta un número introducido por un usuario a través de un prompt.
let maximo = parseInt(prompt("Introduce un número"));

let contador = 1;
while (contador <= maximo) {
	console.log(contador);
	contador++;
}


//bucle while que muestra los pares hasta el prompt introducido por el usuario.
contador = 0
while (contador <= maximo) {

	contador += 2;
}

//cuenta atrás con un bucle while desde el 10 hasta el 1.

contador = 10;
while (contador >= 1) {
	console.log(contador);
	contador = contador - 1;
}