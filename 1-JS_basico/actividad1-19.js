let num = window.prompt('Introduce un número del 1 al 100')

// console.log(num)

if(num==13){ //si es 13
    console.log('mala suerte')
}else{ //si no es 13 hacer todo lo demás
    console.log('impares hasta ' + num)
    for(let i=1;i<=num;i++){ //mostrar los impares 
        if(i%2===1){   //(se podría hacer también sin el if, sumando de 2 en 2)
            console.log(i)
        }
    }

    console.log('múltiplos de 3 hasta' + num)
    for(let i=1;i<=num;i++){
        //mostrar los múltiplos de 3 hasta num
        if(i%3===0){
            console.log(i)
        }
    }

}