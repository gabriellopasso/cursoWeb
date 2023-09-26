// coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'galinnho'
produto['marca do produto'] = 'galo cinza gigante'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    propietario: {
        nome: 'Raul',
        idade: 44,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 22
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorDoSeguro: function (){
        //...
    }
}

carro.propietario.endereco.numero = 1000000000
carro['propietario']['endereco']['logradouro'] = 'Sua mae de oculos'
console.log(carro)
delete carro.condutores
console.log(carro)