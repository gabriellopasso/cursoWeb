// função sem retorno
function imprimirSoma(a, b) {
    let s = a + b
    console.log(s)
}
imprimirSoma(2, 5)

//função com retorno
function soma(a, b = 1) {
    return a + b
}
console.log(soma(3, 5))

// -------------- parte 2 ---------------

//Armazenando uma função em uma variável 
const imprimirDivisao = function (x, y) {
    console.log(x / y)
}
imprimirDivisao(10, 2)

//armazenando uma função arrow em uma variável 
const dividir = (a, b) => {
    return a / b
}
console.log(dividir(20, 5))

// Retorno Implícito 
const subtract = (a, b) => a - b
console.log(subtract(2, 5))

