let encabezado = document.querySelector('h1')
console.log(encabezado)
encabezado.innerHTML = 'Aprendiendo JS'

// let h2 = document.getElementById('subtitulo')
let h2 = document.querySelector('h2:last-of-type')
console.log(h2)

let elementosLista = document.querySelectorAll('li')

console.log(elementosLista)



for (let i = 0; i < elementosLista.length; i++) {
    elementosLista[i] = 'suficiente JavaScript por hoy'

}

//Alternativamente se puede hacer con un "for of"

let cajita = 'pepe'

function pruebas() {
    console.log('estoy haciendo click y llamando a una funcion')
}