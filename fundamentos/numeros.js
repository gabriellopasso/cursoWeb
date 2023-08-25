const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.7687
const avaliaca02 = 6.7879

const total = avaliacao1 * peso1 + avaliaca02 * peso2
const media = total/ (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) //em binario


// Math

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)