console.log('factorial!')


let resultado = 1;


let texto = '';


for (let i = 1; i <= 5; i++) {

	let chorizo
	if (i === 5) {
		chorizo = ' = '
	} else {
		chorizo = 'x'
	}

	texto = texto + i + chorizo

	resultado = resultado * i

}



console.log('5! = ' + texto + resultado)


