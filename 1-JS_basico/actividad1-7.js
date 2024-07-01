/*
1.7 Teniendo el nombre de una persona y sus apellidos 
guardados en distintas variables, concatenarlos para 
formar una única variable. 

Repetir el ejercicio utilizando template strings `${}`
*/

const nombre = 'Homer'
const apellidos = 'Simpson'

const nombreCompleto = nombre + ' ' + apellidos
const nombreCompleto2 = `${nombre} ${apellidos}`

console.log(nombreCompleto)
console.log(nombreCompleto2)