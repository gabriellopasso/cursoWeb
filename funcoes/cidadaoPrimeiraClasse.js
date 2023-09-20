// Função em JS é first-class object (citizens)
// Higher-Order function

// criar de forma literal
function fun1() {}

// armazernar função em variavel
const fun2 = function () {}

// Armazenar dentro de array
const array = [function (a,b) {return a+b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em atributo de objeto
const obj = {}
obj.falar = function(){ return 'opa'}
console.log(obj.falar())

// Passar função como parametro
function run(fun) {
  fun() 
}

run(function (){ console.log('Executando...')} )

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a+ b+ c)
    }
}
soma(2,4)(5)
const seisMais = soma(2,4)
seisMais(4)
