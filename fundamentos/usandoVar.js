// Testando o escopo da variável 
{ { { { var sera = 'sera???' } } } }

console.log(sera)

/*{ { { { let sera2 = 'sera??' } } } }
console.log(sera2)                                 RETONA UM ERRO
{ { { { const sera3 = 'sera?' } } } }
console.log(sera3)*/

// nO CASO DE UMA FUNÇÃO O ESCOPO NÃO É GLOBAL - RETORNA ERRO
/*function x(){
    var y = 'deu bom'
}
console.log(y)*/

var numero = 1 
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)