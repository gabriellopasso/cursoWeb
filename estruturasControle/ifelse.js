const imprimirNota = function(nota){
    if(nota >= 7) {
        console.log('aprovado')
    }else{
        console.log('reprovado')
    }
}

imprimirNota(10)
imprimirNota(4)

Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9,19)) {
        console.log('Nota A+')
    }else if(nota.entre(7, 8.99)){
        console.log('Nota A')
    }else if(nota.entre(5, 6.99)){
        console.log('Nota B')
    }else if(nota.entre(0, 4.99)){
        console.log('Nota B de burro')
    } else {
        console.log('Nota invalida')
    }
}

imprimirResultado(4)
imprimirResultado(6)
imprimirResultado(8)
imprimirResultado(9)
imprimirResultado(1)