/* TABELA VERDADE
// 'e'
V e V => V
V e F => F
F e ? => F

// 'OU'
V ou ? => V
F ou ? => ?
F ou V => V
F ou F => F

// 'ou' Exclusivo
V XOR V -> F
V XOR F -> V
F XOR V -> V
F XOR F -> F

// Negação Lógica
!V -> F
!F -> V
||
*/

function compras(trabalho1, trabalho2){
    const comparSorvete = trabalho1 || trabalho2 // ou
    const comprarTv50  = trabalho1 && trabalho2 // e
    //const comprarTv322 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comparSorvete
    return{comparSorvete,  comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(false,false))