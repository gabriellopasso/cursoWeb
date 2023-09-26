const notas = [1.3, 3.6, 5.7, 7.5, 8.6, 3.9, 9.0]

// sem callback
let notasBixas = []
for (let i in notas){
    if (notas[i] <7) notasBixas.push(notas[i])
}
console.log(notasBixas)

const notasBaixas2 = notas.filter(function (nota){ return nota < 7})

console.log(`com callback: ${notasBaixas2}`)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
console.log(`com callback e arrow function: ${notasBaixas3}`)
