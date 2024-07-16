/**
 * Funcion que devuelve true o false 
 * si un número es mayor de edad
 */

function mayorDeEdad(edad){
    if(edad>=18){
        return true
    }else{
        return false
    }
}
function portero(edadUsuario){   
    if(mayorDeEdad(edadUsuario)===true){
        alert('adelante pepito')
    }else{
        alert('no puedeees pasaaaar!')
    }
}

portero(12)

