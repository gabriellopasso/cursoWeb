class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Jubileu')
p1.falar()

function criarPessoa(nome) {
    // this.nome = nome

    this.falar = function (){
        console.log(`meu nome é ${nome}`)
    }
}

const p2 = new criarPessoa('jubileia')
p2.falar()

function criarPessoaFactory(nome) {
    return { 
        falar: () => {
        console.log(`meu nome é ${nome}`)
        }
    }
}
criarPessoaFactory('anderson').falar()