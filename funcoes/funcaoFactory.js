// uma função factory é uma função que retorna um objeto


const prod1 = {
    nome: '...',
    preco: 45

}

// factory simples 
function criarPessoa(){
    return {
        nome: 'ana',
        sobrenome: 'Loche'
    }
}
console.log(criarPessoa())

function criarProduto(nome, preco){
    return {
        nome: nome,
        preco: preco,
        cada:  preco => preco * 2
    }
}

console.log(criarProduto('angelica', 250))

