// Usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Função construtora
function Produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('pau de borracha', 9.99, 0.15)
const p2 = new Produto('notebook', 3999.99, 0.2)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario () {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joao', 7080, 2)
console.log(f1.getSalario())

// Object.create
const  filha = Object.create(null)
filha.nome= 'juju'
console.log(filha)

// uma função famosa que retorna um Objeto
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)