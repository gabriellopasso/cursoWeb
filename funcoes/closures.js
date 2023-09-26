// Closure é o escopo criado quando uma função é declarada
// esse escopo permite a função acessar e manipular as variáveis externas a função  

// contexto lexico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFunc = fora()

console.log(minhaFunc())