console.log('factorial!')


let resultado = 1;
let texto = '';


for (let i = 1; i <= 5; i++) {

	let simbolo
	if (i === 5) {
		simbolo = ' = '
	} else {
		simbolo = 'x'
	}

	// let simbolo = i === 5 ? ' = ' : 'x'

	texto = texto + i + simbolo
	resultado = resultado * i
}



console.log('5! = ' + texto + resultado)


