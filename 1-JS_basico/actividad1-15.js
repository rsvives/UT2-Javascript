console.log('factorial!')


let resultado = 1;
let texto = '';

for (let i = 1; i <= 5; i++) {
	resultado = resultado * i;
	let simbolo;

	if (i === 5) {
		simbolo = "=";
	} else {
		simbolo = 'x';
	}
	texto = texto + i + simbolo;
	// console.log(texto)
}
// console.log(resultado)

console.log(`5!= ${texto} ${resultado}`)

