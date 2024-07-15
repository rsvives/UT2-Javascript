// Crear un array de números consecutivos desde un valor mínimo dado hasta un valor máximo dado, recorrerlo mostrando el valor y la posición

function numConsecutivos (numMin, numMax) {
    let numeros = [];
    //primero crear
    for (let valor = numMin; valor <= numMax; valor++) {
        numeros.push(valor); 
    }
    
    //iterar mostrando valor y posición
    for (let posicion = 0; posicion < numeros.length; posicion++) {
        console.log("Valor:", numeros[posicion], "Pos:", posicion);  
    }
}

numConsecutivos(5,35);

