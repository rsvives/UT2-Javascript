console.log('Fibonacci 🍕🤌🏻')

const maximo = window.prompt('hasta qué numero quieres de la sucesión')

let ultimo = 1
let penultimo = 1



for (let i = 1; i < maximo; i = ultimo + penultimo) {
	console.log(i)
	penultimo = ultimo
	ultimo = i
}