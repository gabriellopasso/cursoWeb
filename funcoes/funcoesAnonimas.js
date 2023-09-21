const soma = function (x,y){
    return x+y
}


const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(4,7)
imprimirResultado(4,7, function (x, y){
    return x -y
})

const pessoa = {
    falar: function (){
        return 'oi mano'
    }
}