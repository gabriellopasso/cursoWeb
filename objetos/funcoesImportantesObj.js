const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // retorna arrays com chave/valor

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
// outra maneira de escrever usando destructuring
/*Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})*/

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, //aparecer ou não na lista de keys
    writable: false,
    value: '01/01/2020'
})

//pessoa.dataNascimento = '01/01/2017' //não aceita
console.log(Object.keys(pessoa))
console.log(pessoa.dataNascimento)

// Object.assing (ECMAscript (6) 2015)
const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c:3, a:4}
const objResultante = Object.assign(destino, o1, o2)
console.log(objResultante)

Object.freeze(objResultante) // torna impossível alterar o obj
