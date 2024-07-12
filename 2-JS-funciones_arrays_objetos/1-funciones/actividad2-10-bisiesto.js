console.log('ejercicio10')

function bisiesto(año){

  if ((año%400===0)||(año%100!==0 && año%4===0)){
    console.log(true)
  }else{
    console.log(false);
  }
}


bisiesto(1900)
bisiesto(2000)
bisiesto(2004)