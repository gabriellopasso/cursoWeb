// novo recurso do ES2015
console.log('Testando destructuring em objetos')
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'rua abc',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade )

const {nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) 

const { endereco, endereco: { logradouro, numero, cep}} = pessoa
console.log(endereco, cep)

console.log('-=-=-=-=-=-=-=-=-=-==-=-=-=-=-==-=-=-=-=-=-=-=-==-')
console.log('Testando destructuring em arrays(listas)')

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

console.log('-=-=-=-=-=-=-=-=-=-==-=-=-=-=-==-=-=-=-=-=-=-=-==-')
console.log('Testando destructuring em funções')

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
console.log(rand({max: 50, min: 40}))
console.log(rand({min: 4000}))
console.log({})

function randlista([min = 0, max =1000]){
    if (min>max) [min, max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(randlista([20,100]))

console.log(randlista([993]))
console.log(randlista([, 10]))