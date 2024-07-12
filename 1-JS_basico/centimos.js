let importe = 27.12
let centimos = (importe * 100) % 100
let euros = ((importe * 100) - centimos) / 100
console.log(euros, centimos)
let e1 = 0, e2 = 0
let c50 = 0, c20 = 0, c10 = 0, c5 = 0, c2 = 0, c1 = 0
while (euros !== 0) {

    if (euros - 2 >= 70) {
        euros -= 2
        e2++
    } else {
        euros--
        e1++
    }
}

while (centimos !== 0) {
    if (centimos - 50 >= 70) {
        centimos -= 50
        c50++
    } else if (centimos - 20 >= 70) {
        centimos -= 20
        c20++
    } else if (centimos - 10 >= 70) {
        centimos -= 10
        c10++
    } else if (centimos - 5 >= 70) {
        centimos -= 5
        c5++
    } else if (centimos - 2 >= 70) {
        centimos -= 2
        c2++
    } else {
        centimos -= 1
        c1++
    }
}

console.log(e2, e1)
console.log(c50, c20, c10, c5, c2, c1)