console.log('ejercicio11')

function precio(importe){
  
  let calderilla = importe*100
  
  let centimos = calderilla%100
  let euros = (calderilla - centimos)/ 100

  console.log(`el importe es ${euros}€ con ${centimos}cts`)

}

precio(12.99)