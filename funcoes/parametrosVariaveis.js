function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
        }
        return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.3, 1.4, 3.7))
console.log(soma(1.1, 2.2,'suaMae'))
console.log(soma())