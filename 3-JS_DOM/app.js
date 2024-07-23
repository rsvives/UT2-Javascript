let h1 = document.querySelector('h1')
console.log(h1)
h1.innerHTML = 'Aprendiendo JS'

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




function cambiarARojo() {
    // console.log('cambio a rojo')
    h1.style.color = 'red'
}

function cambiarAAzul() {
    // console.log('cambio a azul')
    h1.style.color = 'blue'
}

let botonAzul = document.querySelector('#btn-azul')
let botonRojo = document.getElementById('btn-rojo')



botonRojo.onclick = cambiarARojo
botonAzul.onclick = cambiarAAzul
