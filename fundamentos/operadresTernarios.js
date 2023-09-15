// operador com três operandos
// primeira parte 'nota >=7', segunda parte (?) se for verdadeiro retorna primeira secção se for falso a segunda
const resultado = nota => nota >= 7 ? 'aprovado': 'reprovado'
// o operador ternário checa a condição e tem um retorno com duas possibilidades
//const status = nota >= 7 ? 'aprovado': 'reprovado'

console.log(resultado(7.4), resultado(6.7))