const mayoriaDeEdad = 18
const jubileta = 65

let edadUsuario = window.prompt('Introduce tu edad')


if (edadUsuario >= mayoriaDeEdad) {
    alert('bienvenid@, adelante')
} else {
    alert('no puedes pasar')
}

//dos condiciones unidas con el operador "y" (&&)
// if ((edadUsuario >= mayoriaDeEdad) && (edadUsuario < jubileta)) {
//     alert('bienvenid@, adelante')
// } else {
//     alert('no puedes pasar')
// }



// let momentoDelDia = 'tarde'

// if (momentoDelDia === 'mañana') {
//     console.log('buenos dias')
// } else if (momentoDelDia === 'tarde') {
//     console.log('buenas tardes')
// } else if (momentoDelDia === 'noche') {
//     console.log('buenas noches')

// } else {
//     console.log('no sé qué momento es ese...🙁')
// }