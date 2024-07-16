  
function pintarEnHTML(arrayDeDatos){
    let body = document.querySelector('body')
    for (let index = 0; index < arrayDeDatos.length; index++) {
        let parrafo = document.createElement('p')
        parrafo.innerHTML = arrayDeDatos[index];
        body.append(parrafo)
    }
}

function filtrarDadoUnMaximo(conjuntoDeNumeros,maximo){
    let sacoVacio = []
    for(let i=0;i<conjuntoDeNumeros.length;i++){
      if(conjuntoDeNumeros[i]<maximo){
        // console.log(conjuntoDeNumeros[i])
        sacoVacio.push(conjuntoDeNumeros[i])
      }
    }

    return sacoVacio
  }
   
  const precios = [ 139, 119, 39, 241, 240, 163, 75, 46, 115, 154, 25, 159, 163, 185, 147, 34, 12, 146, 129, 209, 150, 189, 163, 105, 201, 47, 222, 192, 171, 224, 224, 201, 78, 93, 203, 171, 74, 28, 71, 16, 128, 195, 103, 105, 89, 25, 64, 62, 171, 47 ]
  const alturas=[123,745,3212,234,75247]
  
//   filtrarDadoUnMaximo(precios,150)
// console.log(precios)


// filtrarDadoUnMaximo(precios,100)
  


// pintarEnHTML(filtrarDadoUnMaximo(precios,250))









function sumar(a,b){
  console.log('realizando operaciones')

  //...
  let resultado = a+b
  console.log('resultado:',resultado)
  return resultado
}

export{sumar}

  
  
  
  
  
  
  