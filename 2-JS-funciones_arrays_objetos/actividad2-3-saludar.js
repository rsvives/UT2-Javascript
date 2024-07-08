//funcion que pide el nombre y el género, 
//y en base al genero me saluda Sr., Sra, indefinido
console.log('Saludar');


function saludar( genero, nombre='Desconocido'){
    let distintivo= 'Sr o Sra'

    if(genero=== 'Hombre'){
        distintivo='Sr';
    }else if(genero==='Mujer'){
        distintivo='Sra'
    }
    console.log('Hola '+ distintivo +' '+ nombre );
}

saludar('Mujer','Judit')
saludar('Hombre','Rodri')
saludar('fhasdfhs')