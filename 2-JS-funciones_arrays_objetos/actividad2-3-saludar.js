//funcion que pide el nombre y el género, 
//y en base al genero me saluda Sr., Sra, indefinido
console.log('Saludar');


function saludar( genero, nombre='Desconocido'){
    let distintivo

    if(genero=== 'Hombre'){
        distintivo='Sr';
    }else if(genero==='Mujer'){
        distintivo='Sra'
    }else if(genero==='Fluido'){
        distintivo='X'
    }else{
        distintivo= 'Sr o Sra'
    }
    console.log('Hola '+ distintivo +' '+ nombre );

}

saludar('Mujer','Judit')
saludar('Hombre','Rodri')
saludar('fhasdfhs')













