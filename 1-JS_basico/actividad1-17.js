//bucle while que cuenta desde el uno hasta un número introducido por un usuario a través de un prompt.
let maximo = parseInt(prompt("Introduce un número"));
console.log('1.contador')
let contador = 1;
while (contador <= maximo) {
	console.log(contador);
	contador++;
}


//bucle while que muestra los pares hasta el prompt introducido por el usuario.
console.log('2.pares')
contador = 0
while (contador <= maximo) {
	contador += 2;
}

//cuenta atrás con un bucle while desde el 10 hasta el 1.
console.log('3.cuenta atrás')

contador = 10;
while (contador >= 1) {
	console.log(contador);
	contador = contador - 1;
}


