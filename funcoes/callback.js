const fabricantes = ['Mercedes', 'Audi', 'BMW']


function imprimir(nome, indice) {
    console.log(`${indice}. ${nome}`)
}

fabricantes.forEach(imprimir) // forEach é uma função para arrys e retorna o value e o indice de cada elemento  
fabricantes.forEach(function (fabricante) { console.log(fabricante) }) // ou apenas a value