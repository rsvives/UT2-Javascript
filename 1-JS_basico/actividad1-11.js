let tecla = window.prompt('Pulsa una tecla de WASD')

// if (tecla === 'a') {
//     console.log('izquierda!')
// }else if(tecla ==='d'){
//     console.log('derecha!')
// }else if(tecla ==='w'){
//     console.log('saltar!')
// }else if(tecla ==='s'){
//     console.log('agacharse!')
// }else if(tecla==='a' && tecla==='w') {
//     console.log('saltar hacia atrás!')
// }else {
//     console.log('no sé que letra es esa...!')
// }



switch (tecla) {
    case 'a':
        console.log('uno!')
        break;
    case 'd':
        console.log('derecha!')
        break;
    case 's':
        console.log('agacharse!')
        break;
    case 'w':
        console.log('saltar!')
        break;
    
    default:
        console.log('no sé que tecla es...')
        break;
}



//if else if....
// si tecla es=== a
//console.log( moverse a la izquierda )

// si tecla es=== d
//console.log( moverse a la derecha )

// si tecla es=== w
//console.log( saltar )

// si tecla es=== s
//console.log( agacharse )

// si tecla no es ninguna de las anteriores
//console.log( tecla no reconocida )