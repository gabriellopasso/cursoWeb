const valores = [7.7, 9, 8, 7.5]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] =10
console.log(valores)
console.log(valores.length)

valores.push({1:3}, false, null, 'teste')
console.log(valores)

console.log(typeof valores)