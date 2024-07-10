console.log('ejercicio14')

function parImpar(min,max,tipo){
  //opción 1:
  // for(let x=min;x<=max;x++){
  //   if(tipo==='pares' && x%2===0){
  //       console.log(x)
  //   }else if(tipo==='impares' && x%2!==0){
  //       console.log(x)
  //   }
  // }

  //opción 2:
  if(tipo==='pares'){
    for(let x=min;x<=max;x++){
      if(x%2===0){
        console.log(x)
      }
    }
  }else if(tipo==='impares'){
    for(let x=min;x<=max;x++){
      if(x%2!==0){
        console.log(x)
      }
    }
  }
}


parImpar(5,15,'pares')
parImpar(1,10,'impares')
parImpar(1,100,'primos')