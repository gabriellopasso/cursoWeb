// O let tem escopo de bloco, dando preferencia a variaveis de escopo menor
let numero = 1
{
    let numero = 2
    console.log('Dentro: ', numero)
}
console.log('Fora: ', numero)