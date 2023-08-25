for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log('i =',i)

// --------------------

const funcs = []


for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
//por não ter escopo de bloco os retornos serão iguais
funcs[2]()
funcs[8]()