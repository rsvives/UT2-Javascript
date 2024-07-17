/**
 * función que recibe un objeto de tipo persona(nombre, apellidos, edad)
 * 
 * y devuelve su edad
 */
const pequeñoTimmy = {
    nombre:'Pequeño Timmy',
    apellidos: 'Junior',
    edad:53
}

function edad (obj){
    return obj.edad
}

let laEdadDeTimmy = edad(pequeñoTimmy)
console.log(laEdadDeTimmy);



