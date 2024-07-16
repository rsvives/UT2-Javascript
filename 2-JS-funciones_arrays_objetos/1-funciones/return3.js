/**
 * 
 * Función que recibe un array y 
 * devuelve el último elemento del array
 * 
 * 
 * Ej: ultimoElemento([1,2,3]) -> 3
 * Ej: ultimoElemento(['hola','adios','hastaluego']) -> 'hastaluego'
 */
function ultimoElemento(array){
    let posicionUltimo = array.length -1
    return array[posicionUltimo]
    //también se podría hacer con pop:
    //let ultimo = array.pop()
    // return ultimo
}


let miarray = [1,2,3,4,4,5,6,134,634,1374,8]
let elUltimo =ultimoElemento(miarray)
console.log(elUltimo)

let arrayStrings = ['hola','que tal','yo muy bien']
console.log(ultimoElemento(arrayStrings))
// lo de arriba es lo mismo que esto:
// console.log(ultimoElemento(['hola','que tal','yo muy bien']))