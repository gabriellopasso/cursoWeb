const a = {name: 'juliano'}
const b = a
b.name = 'opa'
console.log(a)
//retora 'opa'

let c = 3
let d = c 
d = 6
console.log(c)
// return 3, por ser uma variavel primitiva

let valor //não inicializada
console.log(valor)

valor = null //ausencia de valor , não aponta para local nenhum na memoria
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
//console.log(produto.preço.a) // erro!
console.log(produto.preço)

produto.preço = 3.5
console.log(produto)

produto.preço = undefined  //evite atribuir undefined
console.log(!!produto.preço)
// delete produto.preço
console.log(produto)

produto.preço = null //sem valor
console.log(!!produto.preço)
console.log(produto)
