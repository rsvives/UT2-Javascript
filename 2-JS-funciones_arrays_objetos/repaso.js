/**
 * Carrescript:
 * 
 * Crear un programa de Javascript que pida por pantalla un producto
 * En base al producto introducido, el programa ha de mostrar en la consola el precio de dicho producto
 * 
 * Los productos son:
 * leche: 2€
 * café: 3€
 * cereales: 1.50€
 * 
 */


let producto = window.prompt('introduce un producto')

// console.log(producto);
let precioLeche = 2

if(producto==='leche'){
    console.log('el precio es 2€')
}else if(producto==='cafe'){
    console.log('el precio es 3€')
}else if(producto==='cereales'){
    console.log('el precio es 1.50€')
}