// console.log('fizzbuzz')
//mostrar los números hasta el 100
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuz')
    } else if (i % 3 === 0) {
        console.log('fizz')
    } else if (i % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(i)
    }


    //otra opción:👇
    // contenido = i

    // if (i % 5 === 0) {
    //   contenido ='buzz'
    // }
    // if (i % 3 === 0) {
    //   contenido ='fizz'
    // }
    // if (i % 3 === 0 && i % 5 === 0) {
    //   contenido ='fizzbuzz'
    // }
    // console.log(i)

}